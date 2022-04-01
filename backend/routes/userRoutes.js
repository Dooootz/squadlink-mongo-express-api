const express = require('express')
const router = express.Router()
const { getUsers, createUser, updateUserById, deleteUserById } = require('../controllers/userController')

router.get('/', getUsers)

router.post('/', createUser)

router.put('/:id', updateUserById)

router.delete('/:id', deleteUserById)

module.exports = router