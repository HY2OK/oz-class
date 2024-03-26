const express = require('express')
const { default: mongoose } = require('mongoose')
const path = require('path')
const mongodbKey = require('../config/key')
const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

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

app.get('/login', (req, res) => {
  res.render('login')
})

app.get('/signup', (req, res) => {
  res.render('signup')
})

const port = 4000
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
})
