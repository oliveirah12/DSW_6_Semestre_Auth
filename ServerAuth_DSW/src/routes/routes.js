const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')


//Rotas User
router.post('/auth/register', userController.create)
router.post('/auth/login', userController.login)
router.get('/auth/token', userController.checkToken)


module.exports = router
