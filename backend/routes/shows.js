const express = require('express');
const router = express.Router();
const isAuthenticated = require('../middlewares/is_auth')

const {createShow, deleteShow, getShows, updateShow} = require('../controllers/shows_controller')


router.get('/', isAuthenticated, getShows);
router.post('/create', isAuthenticated, createShow);
router.post('/update/:id', isAuthenticated, updateShow);
router.get('/delete/:id', isAuthenticated, deleteShow)


module.exports = router;
