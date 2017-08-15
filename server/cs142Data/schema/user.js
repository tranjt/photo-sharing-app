"use strict";
/*
 *  Defined the Mongoose Schema and return a Model for a User
 */
/* jshint node: true */

var mongoose = require('mongoose');
var bcrypt = require("bcrypt-nodejs");

// create a schema
var userSchema = new mongoose.Schema({
    first_name: String, // First name of the user.
    last_name: String,  // Last name of the user.
    location: String,    // Location  of the user.
    description: String,  // A brief user description
    occupation: String,    // Occupation of the user.
    login_name: {
        type: String,
        unique: true,
        lowercase: true
    }, // User login name
    password: String // User password
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


// whenever a User object is created, it will have access to any methods defined on methods
userSchema.methods.comparePassword = function (candidatePassword, callback) {
    // bcrypt will handle hashing and compare this.password, comes from the "user" caller
    bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
        if (err) { return callback(err); }

        callback(null, isMatch);
    })
}


// the schema is useless so far
// we need to create a model using it
var User = mongoose.model('User', userSchema);

// make this available to our users in our Node applications
module.exports = User;
