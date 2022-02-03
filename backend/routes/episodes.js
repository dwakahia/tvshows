const express = require('express');
const router = express.Router();
const isAuthenticated = require('../middlewares/is_auth')

const {getEpisodesPerShow, createEpisode, deleteEpisode, updateEpisode} = require('../controllers/episodes_controller');

router.get('/:id', isAuthenticated, getEpisodesPerShow);
router.post('/create', isAuthenticated, createEpisode)
router.post('/update/:id', isAuthenticated, updateEpisode)
router.get('/delete/:id', isAuthenticated, deleteEpisode);

module.exports = router;

