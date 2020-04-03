// import mongoose
const mongoose = require('mongoose');

// create a schema
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

// create a model using mongoose.model(NAME, Schema)
const User = mongoose.model('User', UserSchema);

//export model
module.exports = User;