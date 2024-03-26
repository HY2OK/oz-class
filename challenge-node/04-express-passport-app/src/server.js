const express = require('express')
const { default: mongoose } = require('mongoose')
const path = require('path')
const mongodbKey = require('../config/key')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

mongoose.set('strictQuery', false)
mongoose
  .connect(mongodbKey)
  .then(() => {
    console.log('mongodb connected')
  })
  .catch((err) => {
    console.log(err)
  })

app.use('/static', express.static(path.join(__dirname, 'public')))

const port = 4000
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
})
