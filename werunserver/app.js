const createError = require('http-errors')
const express = require('express')
const path = require('path')
const logger = require('morgan')

const indexRouter = require('./routes/index')
const mysql = require('./work/mysql')

const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

logger.format('werun', ':method :url :status :response-time[3] :remote-addr ');
app.use(logger('werun',mysql.savelog()))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/static', express.static(path.join(__dirname, 'public')))


app.use('/', indexRouter)

app.use(function (req, res, next) {
  next(createError(404))
})

app.use(function (err, req, res, next) {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  res.redirect('/');
})

module.exports = app
