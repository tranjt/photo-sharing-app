import User from "../models/user";
import jwt from "jwt-simple";
import { secret } from "../config";


function tokenForUser(user) {
    const timestamp = new Date().getTime();
    // "sub" subject jwt, "iat" issue at time 
    return jwt.encode({ sub: user.id, iat: timestamp }, secret);
}

export function signin(req, res, next) {
    // User has already had their email and password auth'd
    // we just need to give them a token
    const userCopy = JSON.parse(JSON.stringify(req.user));
    res.send({
        user: {
            first_name: userCopy.first_name,
            last_name: userCopy.last_name,
            location: userCopy.location,
            login_name: userCopy.login_name,
            occupation: userCopy.occupation,
            description: userCopy.description,
            _id: userCopy._id
        },
        token: tokenForUser(req.user)
    });
}

export function signup(req, res, next) {
    const email = req.body.email;
    const password = req.body.password;
    if (!email || !password) {
        return res.status(422).send({ error: "You must provide email and password" });
    }

    User.findOne({ email: email })
        .then(existingUser => {
            if (existingUser) {
                return res.status(422).send({ error: "Email is already in use." });
            }
            // If a user with email does NOT exist, create and save user record
            const user = new User({
                email,
                password
            });

            user.save(function (err) {
                if (err) { return next(err); }
            });
            // Respond to request indicating the user was created
            res.json({ token: tokenForUser(user) });

        }).catch(err => {
            return next(err);
        });
}