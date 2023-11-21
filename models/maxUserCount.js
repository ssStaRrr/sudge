const mongoose = require("mongoose")

const maxUserCount = new mongoose.Schema({
    maxUserCount : {
        type: Number
    },
    createdAt: { type: Date, default: () => Date.now() + 3*60*60*1000 } // Assuming a "createdAt" field
})

module.exports = mongoose.model("MaxUserCount", maxUserCount)