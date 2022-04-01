// @desc    Get users
// @route   GET /api/users
// @access  Private
const getUsers = (req,res) => {
    res.status(200).json({message: "get users"})
}

// @desc    Create users
// @route   POST /api/users
// @access  Private
const createUser = (req,res) => {
    res.status(200).json({message: "created user"})
}

// @desc    Update user
// @route   PUT /api/users/:id
// @access  Private
const updateUserById = (req,res) => {
    res.status(200).json({message: `Updated user ${req.params.id}`})
}

// @desc    Delete user
// @route   DELETE /api/users
// @access  Private
const deleteUserById = (req,res) => {
    res.status(200).json({message: `Deleted user ${req.params.id}`})
}

module.exports = {
    getUsers,
    createUser,
    updateUserById,
    deleteUserById,
}