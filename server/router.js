import { signup, signin } from "./controllers/authenticate";
import passport from "passport";
import passportService from "./services/passport";
import User from "./cs142Data/schema/user";
import Photo from "./cs142Data/schema/photo";
import mongoose from "mongoose";
import async from "async";

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

                const userList = users.map(user => {
                    return {
                        _id: user._id,
                        first_name: user.first_name,
                        last_name: user.last_name
                    }
                });
                res.status(200).send(userList);

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

                res.status(200).send({
                    _id: user._id,
                    first_name: user.first_name,
                    last_name: user.last_name,
                    location: user.location,
                    description: user.description,
                    occupation: user.occupation
                });
            }).catch(err => {
                return next(err);
            });
    });


    // URL /photosOfUser/:id - Return the Photos for User (id)
    // photo properties (_id, user_id, comments, file_name, date_time) 
    // comments array elements properties (comment, date_time, _id, user_id, user)
    // user properties (_id, first_name, last_name), comment user_id used as _id to find user in User model
    app.get('/photosOfUser/:id', function (req, res, next) {

        const _id = req.params.id;

        Photo.find({ user_id: _id })
            .then(photos => {
                if (!photos.length) { return res.status(400).send('Not found'); }

                const photocopy = JSON.parse(JSON.stringify(photos));
                async.each(photocopy, function (photo, photoCallback) {
                    
                    async.each(photo.comments, function (comment, commentCallback) {
                        User.findOne({ _id: comment.user_id })
                            // _id, first_name, last_name
                            .then(user => {
                                if (user) {
                                    comment.user = {
                                        _id: user._id,
                                        last_name: user.last_name,
                                        first_name: user.first_name
                                    };
                                    commentCallback();
                                }
                            }).catch(err => {
                                console.log(err);
                                res.status(400).send(err);
                            });

                    }, function (err) {
                        if (err) {
                            console.log(err);
                            res.status(400).send(err);
                        }
                        else {
                            photoCallback();
                        }
                    });


                }, function (err) {
                    if (err) {
                        console.log(err);
                        res.status(400).send(err);
                    }
                    else {
                        res.status(200).send(photocopy);
                    }
                });


            })
            .catch(err => {
                return next(err);
            });
    });
}