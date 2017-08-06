import mongoose from "mongoose";
import bcrypt from "bcrypt-nodejs";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        lowercase: true
    },
    password: String
});

// On Save Hook, encrypt password
// Before saving a model, run this function ".pre"
userSchema.pre("save", function (next) {
    // get access to the user model "caller"
    const user = this;

    // generate a salt then run callback
    bcrypt.genSalt(10, function (err, salt) {
        if (err) { return next(err); }

        // hash (encrypt) our password using the salt
        bcrypt.hash(user.password, salt, null, function (err, hash) {
            if (err) { return next(err); }

            // overwrite plain text password with encrypted password
            user.password = hash;
            // next to save to the model
            next();
        })
    });
});

const User = mongoose.model("user", userSchema);

export default User;