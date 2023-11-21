const express = require('express');
const app = express();
const {connectToDB} = require("./connectDB")
const adminRoute = require("./routes/admin")
const userRoute = require("./routes/user")
const path = require('path'); // Import the 'path' module

app.use(express.json());       
app.use(express.urlencoded({extended: true})); 

connectToDB()

app.use(express.static(path.join(__dirname, 'public')));


// set the view engine to ejs
app.set('view engine', 'ejs');

// index page
app.get('/', function(req, res) {
    res.render('pages/duyuru');
  });


app.use("/admin",adminRoute)
app.use("/user", userRoute)

app.listen(3000)

