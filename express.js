const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(session({
  secret: require('crypto').randomBytes(48).toString('hex'),
  saveUninitialized: true,
  resave: false
}))

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.json(`Express started at http://localhost:${port}`)
})

app.use('/auth', require('./auth'))
app.use('/lists', require('./lists'))
app.use('/items', require('./items'))

app.listen(port, console.log(`Express started at http://localhost:${port}`))