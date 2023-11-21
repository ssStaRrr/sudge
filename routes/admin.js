const express = require("express")

const router = express.Router()
const {adminLogin, adminLoginPage} = require("../controllers/admin")


router.post("/login", adminLogin)
router.get("/adminLoginPage", adminLoginPage)

module.exports = router