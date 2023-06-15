const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const event = require('./Events');

const userSchema = new Schema({
  
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minLength: 4
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minLength: 8,
    },
   
    email: {
        type: String, 
        required: true,
        unique: true
    },
    event: {
        type: Schema.Types.ObjectId,
        ref: "event"
    }
});

const User = model("User", userSchema, "User");

module.exports = User;