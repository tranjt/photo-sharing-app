import passport from "passport";
import User from "../models/user";
import { secret } from "../config";
import { ExtractJwt, Strategy as JwtStrategy } from "passport-jwt"
import LocalStrategy from "passport-local";

// local strategy will look in the body of req to find "username" "password" field automatic "expected"
// usernameField we will use "email" instead
const localOptions = { usernameField: "email" }
const localLogin = new LocalStrategy(localOptions, function (email, password, done) {
    // verify this email and password, call done with the user
    // if it is the correct email and password
    // otherwise, call done with false
    User.findOne({ email: email }, function (err, user) {
        if (err) { return done(err); }

        if (!user) { return done(null, false); }

        // compare password is "password" equal to user.password?
        user.comparePassword(password, function (err, isMatch) {
            if (err) { return done(err); } // error case 
            if (!isMatch) { return done(null, false); } // no user found

            return done(null, user); // user found, assign to req.user
        })
    })
});


// jwt strategy
// Setup options for JWT Strategy. where to look to find the token from req
const jwtOptions = {
    // look for token in head "authorization"
    jwtFromRequest: ExtractJwt.fromHeader("authorization"),
    // secret encoded with token
    secretOrKey: secret
};

// Create JWT strategy "payload" is the decoded token "sub" and "iat"
// done callback function with or without user found
const jwtLogin = new JwtStrategy(jwtOptions, function (payload, done) {
    // See if the user ID in the payload exists in our database
    // If the does, call "done" with that user
    // otherwise, call done without a user object, not validated user
    User.findById(payload.sub)
        .then(user => {
            if (user) {
                done(null, user);
            } else {
                done(null, false); // no error, couldnt find a user
            }
        })
        .catch(err => done(err, false))

});

// Tell Passport to use this strategy
passport.use(jwtLogin);
passport.use(localLogin);