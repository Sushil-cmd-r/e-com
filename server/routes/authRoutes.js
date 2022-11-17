const express = require('express')
const router = express.Router()
// Auth controllers
const { getUser, login, signup, logout } = require('../controllers/auth')

router.get('/', getUser)
router.post('/login', login)
router.post('/signup', signup)
router.get('/logout', logout)

module.exports = router