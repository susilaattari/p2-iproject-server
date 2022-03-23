const express = require('express')
const router = express.Router()


router.get('/donations', (req, res) => {
  console.log('ini di donate')
})
module.exports = router