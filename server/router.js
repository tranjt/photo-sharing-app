import { signup, signin } from "./controllers/authenticate";
import passport from "passport";
import passportService from "./services/passport";
import User from "./cs142Data/schema/user";
import mongoose from "mongoose";

// session false not cookie base
const requireAuth = passport.authenticate("jwt", { session: false });
const requireSignin = passport.authenticate("local", { session: false });

export default function router(app) {
    // app.get("/", requireAuth, function (req, res) {
    //     res.send({ hi: "there" });
    // });

    // app.post("/signin", requireSignin, signin)

    // app.post("/signup", signup);


    /*
     * URL /user/list - Return all the User object.
     */
    app.get('/user/list', function (req, res, next) {
        User.find({}).then(users => {
             if (!users) { res.status(400).send('Users not found'); }
             
            const usersList = users.map(user => {
                return {
                    id: user._id,
                    first_name: user.first_name,
                    last_name: user.last_name
                };
            });

            res.status(200).send(usersList);

        }).catch(err => {
            return next(err);
        });

    });

    /*
     * URL /user/:id - Return the information for User (id)
     */
    app.get('/user/:id', function (req, res, next) {

        const _id = new mongoose.mongo.ObjectId(req.params.id);
        User.findById({ _id }).then(user => {
            if (!user) { res.status(400).send('User not found'); }

            res.status(200).send(user);

        }).catch(err => {
            return next(err);
        });

    });

}