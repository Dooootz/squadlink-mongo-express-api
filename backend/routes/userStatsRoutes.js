const express = require('express')
const router = express.Router()
const { getUserStatsById, createUserStatsById, updateUserStatsById } = require('../controllers/userStatsController')

// working route
// router.get('/', (req,res) => {
//     res.status(200).json({message: "GET GOALS"})
// })

router.route('/:id')
.get(getUserStatsById)
.post(createUserStatsById)
.put(updateUserStatsById)


module.exports = router