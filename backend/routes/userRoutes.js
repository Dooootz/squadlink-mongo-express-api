const express = require('express')
const router = express.Router()
// import our controller logic to use within our CRUD methods
const { getUsers, createUser, getUserById, updateUserById, deleteUserById } = require('../controllers/userController')

// define our methods to unique endpoints
// splitting our routes into seperate files allows us to narrow down the origin of imminent bugs
router.route('/').get(getUsers).post(createUser)
router.route('/:id').get(getUserById).put(updateUserById).delete(deleteUserById)
// ^^ simplified ^^ 
// router.get('/', getUsers)
// router.post('/', createUser)
// router.put('/:id', updateUserById)
// router.delete('/:id', deleteUserById)

module.exports = router