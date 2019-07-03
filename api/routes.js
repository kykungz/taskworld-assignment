import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  res.send('Hello from express')
})

router.get('/user/register', (req, res) => {
  res.send('Hello from express')
})

router.get('/user/login', (req, res) => {
  res.send('Hello from express')
})

export default router
