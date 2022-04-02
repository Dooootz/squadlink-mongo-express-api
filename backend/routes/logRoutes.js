const express = require('express')
const router = express.Router()
const { getlogs, createNewLog, getlogByUserId, updatelogById, deletelogById } = require('../controllers/logController')

router.route('/').get(getlogs).post(createlog)
router.route('/:id').get(getlogByUserId).delete(deletelogByUserId)
// ^^ simplified ^^ 
// router.get('/', getlogs)
// router.post('/', createlog)
// router.put('/:id', updatelogById)
// router.delete('/:id', deletelogById)

module.exports = router