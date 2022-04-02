const express = require('express')
const router = express.Router()
const { getUsers, createUser, getUserById, updateUserById, deleteUserById } = require('../controllers/userController')

router.route('/').get(getUsers).post(createUser)
router.route('/:id').get(getUserById).put(updateUserById).delete(deleteUserById)
// ^^ simplified ^^ 
// router.get('/', getUsers)
// router.post('/', createUser)
// router.put('/:id', updateUserById)
// router.delete('/:id', deleteUserById)

module.exports = router