const mongoose = require('mongoose')
const userSchema = mongoose.Schema(
    {
        // USER PERSONAL INFO
        firstname: {
            type: String,
            required: [true, 'Please enter your firstname']
        },
        lastname: {
            type: String,
            required: [true, 'Please enter your lastname']
        },
        email: {
            type: String,
            required: [true, 'Please enter your email'],
            unique: true
        },
        password: {
            type: String
            // required: [true, 'Please enter a password']
        },
        birthdate: {
            // change datatype prior to functionality
            type: String, 
            required: [true, 'Please enter your birthdate']
        },
        //PROFILE INFO
        gamertag: {
            type: String,
            required: true 
        },
        profileimg: {
            type: String,
        },
        status: {
            type: Boolean,
            required: true
        },
        aboutme: {
            type: String,
        },
    }, 
    {
    timestamps: true,
    }
)


module.exports = mongoose.model('Users', userSchema)