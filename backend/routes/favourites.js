const express = require('express');
const router = express.Router();
const isAuthenticated = require('../middlewares/is_auth')

const {toggleFavourites} = require('../controllers/favourites_controller');

router.get('/toggle-favourite/:id', isAuthenticated, toggleFavourites);

module.exports = router;
