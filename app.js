require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const router = require('./routes')
const port = 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(router)

app.listen(port, () => {
  console.log('ini sudah di port', port)
})