const express = require('express');
const router = express.Router();
const isAuthenticated = require('../middlewares/is_auth')

const {getUsers, getUserById, deleteUser, createUser, updateUser} = require('../controllers/users_controller')


router.get('/', isAuthenticated, getUsers)
router.post('/create', isAuthenticated, createUser)
router.get('/:id', isAuthenticated, getUserById)
router.put('/update/:id', isAuthenticated, updateUser)
router.delete('/delete/:id', isAuthenticated, deleteUser)

module.exports = router;