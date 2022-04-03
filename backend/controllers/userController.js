const asyncHandler = require('express-async-handler')
const logger = require('../config/logger')
const Users = require('../models/userModel')

// @desc    Get users
// @route   GET /api/users
const getUsers = asyncHandler(async(req,res) => {
    const getAllUsers = await Users.find()
    res.status(200).json(getAllUsers)
    // default logger test -- delete prior to production || once Total users > 10 
    logger.info(getAllUsers)
})

// @desc    Create users
// @route   POST /api/users
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
    logger.info(userData)
})

// @desc    Update user
// @route   GET /api/users/:id
const getUserById = asyncHandler(async(req,res) => {
    const user = await Users.findById(req.params.id)

    if(!user){
        res.status(400)
        throw new Error('User not found')
    }

    const getUserId = await Users.findById(req.params.id, req.body)
    res.status(200).json(getUserId)
    logger.info(userData)

})


// @desc    Update user
// @route   PUT /api/users/:id
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
    logger.info(userData)
})

// @desc    Delete user
// @route   DELETE /api/users/:id
const deleteUserById = asyncHandler(async(req,res) => {
    const user = await Users.findById(req.params.id)

    if (!user) {
        res.status(400)
        throw new Error('user not found')
    }

    await user.remove()
    res.status(200).json({id: req.params.id})
    logger.info(userData)
})

module.exports = {
    getUsers,
    createUser,
    getUserById,
    updateUserById,
    deleteUserById,
}