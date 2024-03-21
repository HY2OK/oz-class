const express = require('express')
const usersRouter = require('./routes/users.router.js')
const postsRouter = require('./routes/posts.router.js')

const PORT = 4000

const app = express()
app.use(express.json())

app.use((req, res, next) => {
  const start = Date.now()
  console.log(`${req.method} ${req.url}`)
  next()
  const diffTime = Date.now() - start
  console.log(`end: ${req.method} ${req.baseUrl}${req.url} ${diffTime}ms`)
})

app.get('/', (req, res) => {
  res.send('Hello, world!')
})

app.use('/users', usersRouter)
app.use('/posts', postsRouter)

app.listen(PORT, () => {
  console.log(`Running on port http://localhost:${PORT}`)
})
