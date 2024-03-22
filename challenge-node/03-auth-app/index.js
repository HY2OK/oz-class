const express = require('express')
const jwt = require('jsonwebtoken')

const app = express()
const secretText = 'superSecret'

const posts = [
  {
    username: 'John',
    title: 'Post 1',
  },
  {
    username: 'Han',
    title: 'Post 2',
  },
]

app.use(express.json())

app.post('/login', (req, res) => {
  const username = req.body.username
  const user = { name: username }

  // jwt 이용해서 토큰 생성, payload + secretText
  const accessToken = jwt.sign(user, secretText)
  res.json({ accessToken: accessToken })
})

app.get('/posts', (req, res) => {
  res.json(posts)
})

const port = 4000
app.listen(port, () => {
  console.log(`listening on port http://localhost:${port}`)
})
