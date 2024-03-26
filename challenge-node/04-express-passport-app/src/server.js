const express = require('express')
const { default: mongoose } = require('mongoose')
const path = require('path')
const mongodbKey = require('./config/key')
const User = require('./models/users.model')
const passport = require('passport')

const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(passport.initialize())
app.use(passport.session())
require('./config/passport')

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

app.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) return next(err)

    if (!user) return res.json({ msg: info })

    req.logIn(user, function (err) {
      if (err) {
        return next(err)
      }
      res.redirect('/')
    })
  })
})

app.get('/signup', (req, res) => {
  res.render('signup')
})

app.post('/signup', async (req, res) => {
  // user 객체 생성
  const user = new User(req.body)
  // user 컬렉션에 유저 저장
  try {
    await user.save()
    return res.status(200).json({
      success: true,
    })
  } catch (error) {
    console.log(error)
  }
})

const port = 4000
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
})
