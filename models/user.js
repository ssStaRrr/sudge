const mongoose = require("mongoose")
const moment = require('moment-timezone');

const user = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    phoneNumber2: {
        type: Number,
        required: true
    },
    identificationNumber: {
        type: Number,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true
    },
    createdAt: { type: Date, default: () => Date.now() + 3*60*60*1000 } // Assuming a "createdAt" field
})

user.index({ identificationNumber: 1 }, { unique: true });

module.exports = mongoose.model("User", user)