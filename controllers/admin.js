const MaxUserCount = require("../models/maxUserCount")
const fs = require('fs');

async function adminLogin (req, res){
    const {username, password, maxUserCount} = req.body
    fs.readFile('../SUDGE/userInfo.json', 'utf8', async (err, data) => {
        if (err) {
          console.error(err);
        }   
        const user = JSON.parse(data)
        if(username == user.username & password == user.password ) {
            const newMaxUserCount = new MaxUserCount({maxUserCount})
            await newMaxUserCount.save()
            let message = ` ${username} Admin Girişi Başarılı`
            res.render("../views/pages/success", {message })
        }
        else{
            let message = `${username} Admin Girişi Başarısız`
            res.render("../views/pages/error", {message})
        }
    }); 

}
async function adminLoginPage(req,res) {
    res.render("../views/pages/adminLogin")
}


module.exports = {
    adminLogin,
    adminLoginPage
}