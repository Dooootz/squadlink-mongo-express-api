const asyncHandler = require('express-async-handler')
// import our stats document / model 
const UserStats = require('../models/userStatsModel')

// @desc    Get user stats by id
// @route   GET /api/userStats
// GET user stats by user id, our error middleware logic will intercept the request & run detailed error logs
const getUserStatsById = asyncHandler(async(req,res) => {
    const getAllUserStats = await UserStats.find(req.params.id)
    res.status(200).json(getAllUserStats)
})

// @desc    Create users
// @route   POST /api/userStats
// link user id to stats document 
const createUserStatsById = asyncHandler(async(req,res) => {
    // req.body.<db column name>
    if(!req.body.user) {
        res.status(400)
        throw new Error('Please add user id')
    }

    const userData = await UserStats.create({
        user: req.params.id,
        mainlegend: req.body.mainlegend
    })
    res.status(201).json(userData)
})

// @desc    Update user
// @route   PUT /api/userStats/:id
// link user id & update stats
const updateUserStatsById = asyncHandler(async(req,res) => {
    const user = await UserStats.findById(req.params.id)

    if(!user){
        res.status(400)
        throw new Error('User not found')
    }

    const updatedUserStats = await UserStats.findByIdAndUpdate(req.params.id, req.body, 
        {
            new: true,
        })
    res.status(200).json(updatedUserStats)
})


module.exports = {
    getUserStatsById,
    createUserStatsById,
    updateUserStatsById,
}