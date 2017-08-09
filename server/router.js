import { signup, signin } from "./controllers/authenticate";
import passport from "passport";
import passportService from "./services/passport";
import User from "./cs142Data/schema/user";
import Photo from "./cs142Data/schema/photo";
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


    // URL /user/list - Return all the User object.
    app.get('/user/list', function (req, res, next) {

        User.find({})
            .then(users => {
                if (!users) { return res.status(400).send('Users not found'); }

                res.status(200).send(users);
            }).catch(err => {
                return next(err);
            });

    });

    //  URL /user/:id - Return the information for User (id)
    app.get('/user/:id', function (req, res, next) {

        const _id = new mongoose.mongo.ObjectId(req.params.id);

        User.findById({ _id })
            .then(user => {
                if (!user) { return res.status(400).send('User not found'); }                
                res.status(200).send(user);
            }).catch(err => {
                return next(err);
            });
    });


    // URL /photosOfUser/:id - Return the Photos for User (id)
    app.get('/photosOfUser/:id', function (req, res, next) {

        const _id = new mongoose.mongo.ObjectId(req.params.id);

        Photo.find({ user_id: _id })
            .then(photos => {
                if (!photos.length) { return res.status(400).send('Not found'); }
                res.status(200).send(photos);
            }).catch(err => {
                return next(err);
            });
    });
}