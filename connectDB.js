let express = require("express")
let mongoose = require("mongoose")

let app = express()

// MongoDB Atlas connection string
const url = "mongodb+srv://ibrahim:iboo123@mylearning.td84fo3.mongodb.net/"

const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}
async function connectToDB() {
    mongoose.connect(url, connectionParams)
.then(()=> {
    console.log("Connected the database")
}).catch((err)=>{
    console.log(`Error connecting to the database. \n${err}`)
})
}

module.exports = {
    connectToDB
}