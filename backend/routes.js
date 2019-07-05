import express from 'express'
import createError from 'http-errors'
import userService from './services/userService'
import requireAuth from './middlewares/requireAuth'

const router = express.Router()

router.get('/', (req, res) => {
  res.send('Hello World')
})

router.get('/addUser', async (req, res) => {
  const user = await userService.createNewUser({
    username: 'test',
    password: 'test',
    email: 'test@gmail.com',
  })
  res.send({ success: true })
})

router.get('/user', requireAuth, async (req, res) => {
  res.send(req.user)
})

router.post('/user/register', async (req, res) => {
  const { username, password, email } = req.body
  const user = await userService.createNewUser({ username, password, email })
  res.send(user)
})

router.post('/user/login', async (req, res, next) => {
  const { username, password } = req.body
  try {
    const token = await userService.login(username, password)
    res.send({ token })
  } catch (error) {
    next(createError(401, error.message))
  }
})

router.post('/user/preferences/update', requireAuth, async (req, res, next) => {
  const user = req.user
  const preferences = req.body
  const updatedPreferences = await userService.updatePreferences(
    user._id,
    preferences,
  )
  res.send(updatedPreferences)
})

export default router
