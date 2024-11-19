
const express = require("express")

const { handleContact } = require("./controller")

const router = express.Router()

router.post("/contactus", handleContact);


module.exports = router