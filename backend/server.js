import ip from 'ip'
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import passport from 'passport'
import routes from './routes'
import mongodb from './mongodb'

const port = process.env.PORT || 5000
const app = express()

mongodb.connect()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(passport.initialize())

app.use('/', routes)

// error handler
app.use((err, req, res, next) => {
  console.error(err.message)
  res.status(err.status || 500).send(err.message || 'Internal Server Error')
})

app.listen(port, () => {
  console.log(`Server started in ${process.env.NODE_ENV} mode`)
  console.log(`Server started on http://${ip.address()}:${port}`)
  console.log(`Server started on http://localhost:${port}`)
})
