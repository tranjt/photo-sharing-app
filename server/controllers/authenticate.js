import User from "../models/user";

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
            res.json({ msg: "User created" });
        }).catch(err => {
            return next(err);
        });
}