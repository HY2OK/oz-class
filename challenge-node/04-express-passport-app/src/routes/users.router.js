const express = require('express')
const passport = require('passport')
const User = require('../models/users.model')
const sendMail = require('../mail/mail')
const usersRouter = express.Router()

usersRouter.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) return next(err)

    if (!user) return res.json({ msg: info })

    req.logIn(user, function (err) {
      if (err) {
        return next(err)
      }
      res.redirect('/')
    })
  })(req, res, next)
})

usersRouter.post('/logout', (req, res, next) => {
  req.logOut(function (err) {
    if (err) {
      return next(err)
    }
    res.redirect('/login')
  })
})

usersRouter.post('/signup', async (req, res) => {
  // user 객체 생성
  const user = new User(req.body)
  // user 컬렉션에 유저 저장
  try {
    await user.save()
    // 메일 보내기
    sendMail('gurwns232@naver.com', 'jun', 'welcome')
    return res.status(200).json({
      success: true,
    })
  } catch (error) {
    console.log(error)
  }
})

usersRouter.get('/google', passport.authenticate('google'))
usersRouter.get(
  '/google/callback',
  passport.authenticate('google', {
    successReturnToOrRedirect: '/',
    failureRedirect: '/login',
  }),
)

usersRouter.get('/kakao', passport.authenticate('kakao'))
usersRouter.get(
  '/kakao/callback',
  passport.authenticate('kakao', {
    successReturnToOrRedirect: '/',
    failureRedirect: '/login',
  }),
)

module.exports = usersRouter
