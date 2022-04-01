const express = require('express')
const router = express.Router()
const { getUsers } = require('../controllers/userController')

router.get('/', getUsers)

router.post('/', (req,res) => {
    res.status(200).json({message: "get users"})
})

router.put('/:id', (req,res) => {
    res.status(200).json({message: `Updated user ${req.params.id}`})
})

router.delete('/:id', (req,res) => {
    res.status(200).json({message: `Deleted user ${req.params.id}`})
})

module.exports = router