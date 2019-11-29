require('dotenv').config({path: __dirname + '/.env'});

const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const port = process.env.PORT

const usersRouter = require('./routes/users')

require('./db/db')

const app = express()


app.use(morgan('combined'))
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())
app.use(cors())

app.use('/users', usersRouter)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})