const express = require("express")
const router = express.Router()

const {postUser, getBasvuruKayitFormu} = require("../controllers/user")

router.post("/postUser", postUser)
router.get("/basvuruKayitFormu", getBasvuruKayitFormu)

module.exports = router;