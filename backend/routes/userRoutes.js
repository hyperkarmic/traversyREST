const express = require('express')
const router = express.Router()
const { registerUser } = require('../controllers/use')
router.post('/', registerUser)

module.exports = router
