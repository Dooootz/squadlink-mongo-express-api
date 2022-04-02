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
    if(!req.body) {
        res.status(400)
        throw new Error('No request')
    }

    const userData = await Users.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        birthdate: req.body.birthdate,
        gamertag: req.body.gamertag,
        profileimg: req.body.profileimg,
        status: req.body.status,
        aboutme: req.body.aboutme
    })
    res.status(201).json(userData)
})

// @desc    Update user
// @route   GET /api/users/:id
// @access  Private
const getUserById = asyncHandler(async(req,res) => {
    const user = await Users.findById(req.params.id)

    if(!user){
        res.status(400)
        throw new Error('User not found')
    }

    const getUserId = await Users.findById(req.params.id, req.body)
    res.status(200).json(getUserId)
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
// @route   DELETE /api/users/:id
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
    getUserById,
    updateUserById,
    deleteUserById,
}