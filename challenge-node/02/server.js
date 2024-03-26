const express = require('express')
const path = require('path')
const usersRouter = require('./routes/users.router.js')
const postsRouter = require('./routes/posts.router.js')

const PORT = 4000

const app = express()

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

app.use('/static', express.static(path.join(__dirname, 'public')))

app.use(express.json())

app.use((req, res, next) => {
  const start = Date.now()
  console.log(`${req.method} ${req.url}`)
  next()
  const diffTime = Date.now() - start
  console.log(`end: ${req.method} ${req.baseUrl}${req.url} ${diffTime}ms`)
})

app.get('/', (req, res) => {
  res.render('index', {
    imageTitle: 'It is Title 2',
  })
})

app.use('/users', usersRouter)
app.use('/posts', postsRouter)

app.listen(PORT, () => {
  console.log(`Running on port http://localhost:${PORT}`)
})