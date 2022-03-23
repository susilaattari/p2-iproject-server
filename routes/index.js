const express = require('express')
const router = express.Router()
const donationRouter = require('./donations')
const userRouter = require('./user')

router.use(donationRouter)
router.use(userRouter)

module.exports = router