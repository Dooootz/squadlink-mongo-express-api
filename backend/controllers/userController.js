const asyncHandler = require('express-async-handler')
const logger = require('../config/logger')
const Users = require('../models/userModel')

// @desc    Get users
// @route   GET /api/users
// find users table & respond http 200 status & parse all data as JSON
const getUsers = asyncHandler(async(req,res) => {
    const getAllUsers = await Users.find()
    res.status(200).json(getAllUsers)
    // default logger test -- delete prior to production || once Total users > 10 
    logger.info(getAllUsers)
})

// @desc    Create users
// @route   POST /api/users
// if theirs no request body data, then throw http 400 status + async handler error message
const createUser = asyncHandler(async(req,res) => {
    // req.body.<db column name>
    if(!req.body) {
        res.status(400)
        throw new Error('No request')
    }

    // if their is data then push to our Schema + send 201 created status 
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
    // log the request to our Logs table 
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
})


// @desc    Update user
// @route   PUT /api/users/:id
const updateUserById = asyncHandler(async(req,res) => {
    const user = await Users.findById(req.params.id)

    if(!user){
        res.status(400)
        throw new Error('User not found')
    }

    // update the document & capture our latest request logs 
    const updatedUser = await Users.findByIdAndUpdate(req.params.id, req.body, 
        {
            new: true,
        })
        // log update to console during development 
    res.status(200).json(updatedUser)
    logger.info(userData)
})

// @desc    Delete user
// @route   DELETE /api/users/:id
const deleteUserById = asyncHandler(async(req,res) => {
    // find user id in the request parameters
    const user = await Users.findById(req.params.id)

    // if the userID does not exist, then throw 400 status code + aysnc error handler message
    if (!user) {
        res.status(400)
        throw new Error('user not found')
    }

    // if we found & matched the user id, then remove from document
    await user.remove()
    res.status(200).json({id: req.params.id})
    // capture request details & store logs in our DB 
    logger.info(userData)
})

// export controller logic to our routes folder 
// splitting our router logic allows us to reliably trace the error stack
// it also tidys up our controller logic, making it highly readable   
module.exports = {
    getUsers,
    createUser,
    getUserById,
    updateUserById,
    deleteUserById,
}