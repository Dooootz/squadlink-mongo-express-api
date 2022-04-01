const asyncHandler = require('express-async-handler')

const Users = require('../models/userModel')

// @desc    Get users
// @route   GET /api/users
// @access  Private
const getUsers = asyncHandler(async(req,res) => {
    const getAllUsers = await Users.find()
    res.status(200).json(getAllUsers)
})

// @desc    Create users
// @route   POST /api/users
// @access  Private
const createUser = asyncHandler(async(req,res) => {
    // req.body.<db column name>
    if(!req.body.name) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    const userData = await Users.create({
        text: req.body.name
    })
    res.status(200).json(userData)
})

// @desc    Update user
// @route   PUT /api/users/:id
// @access  Private
const updateUserById = asyncHandler(async(req,res) => {
    const user = await Users.findById(req.params.id)

    if(!user){
        res.status(400)
        throw new Error('User not found')
    }

    const updatedUser = await Users.findByIdAndUpdate(req.params.id, req.body, 
        {
            new: true,
        })
    res.status(200).json(updatedUser)
})

// @desc    Delete user
// @route   DELETE /api/users
// @access  Private
const deleteUserById = asyncHandler(async(req,res) => {
    const user = await Users.findById(req.params.id)

    if (!user) {
        res.status(400)
        throw new Error('user not found')
    }

    await user.remove()
    res.status(200).json({id: req.params.id})
})

module.exports = {
    getUsers,
    createUser,
    updateUserById,
    deleteUserById,
}