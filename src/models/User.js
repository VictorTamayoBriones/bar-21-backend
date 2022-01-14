const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    userType: {
        type: String,
        required: true
    },
    userEmail: {
        type: String,
        required: true,
        unique: true
    },
    userPass: {
        type: String,
        required: true
    }
},{
    timestamps: true
})

module.exports = model('User', userSchema);