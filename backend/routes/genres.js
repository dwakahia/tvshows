const express = require('express');
const router = express.Router();
const isAuthenticated = require('../middlewares/is_auth')

const {createGenre, getGenres, updateGenre, deleteGenre} = require('../controllers/genres_controller')

router.get('/', isAuthenticated, getGenres)
router.post('/create', isAuthenticated, createGenre);
router.post('/update/:id', isAuthenticated, updateGenre);
router.get('/delete/:id', isAuthenticated, deleteGenre)

module.exports = router;
