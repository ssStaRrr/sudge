const User = require("../models/user")
const MaxUserCount = require("../models/maxUserCount")

async function postUser(req, res) {
    try {
        let { name, surname, phoneNumber, phoneNumber2, identificationNumber, address } = req.body
        const user = {
            name,
            surname,
            phoneNumber,
            phoneNumber2,
            identificationNumber,
            address
        }

        const selectedMaxUserCount = await MaxUserCount.findOne({})
        let allUsers = await User.find()

        if (allUsers.length < selectedMaxUserCount.maxUserCount) {
            let newUser = new User(user)
            await newUser.save()
            let message = `Sayın ${name} ${surname} basvuru kaydınız alınmıştır`
            res.render("../views/pages/success", { message })
        } else {
            let message = "Kontenjan dolduğu için yeni bir kullanıcı kaydı oluşturulamıyor. Bir sonraki takvimi takip ediniz. Teşekkürler"
            res.render("../views/pages/error", { message })
        }
    } catch (err) {
        if (err.code == 11000) {
            console.log(err.message)
            let message = "Bir TC Kimlik numarası bir kere kullanılabilir!"
            res.render("../views/pages/error", { message })
        }
    }
}

async function getBasvuruKayitFormu(req, res) {
    try {
        const selectedMaxUserCount = await MaxUserCount.findOne({})
        if (selectedMaxUserCount == null) {
            let message = "Başvuru Kayıt alma işlemleri başlamamıştır"
            res.render("../views/pages/error", { message })
        } else {
            res.render("pages/basvuruKayitFormu")
        }
        
    } catch (err) {
        res.render("../views/pages/error", { message: err.message })
    }

}

module.exports = {
    postUser,
    getBasvuruKayitFormu
}