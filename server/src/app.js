require('dotenv').config({path: __dirname + '/.env'});

const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const port = process.env.PORT

const usersRouter = require('./routes/users')
const ratedResumesRouter = require('./routes/resumes')

require('./db/db')

const app = express()


app.use(morgan('combined'))
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())
app.use(cors())

app.use('/users', usersRouter)
app.use('/rated-resumes', ratedResumesRouter)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})