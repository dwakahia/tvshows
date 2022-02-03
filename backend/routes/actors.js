const express = require('express');
const router = express.Router();
const isAuthenticated = require('../middlewares/is_auth')

const {createActor, deleteActor, updateActor, getAllActors} = require('../controllers/actors_controller')


router.get('/', isAuthenticated, getAllActors);
router.post('/create', isAuthenticated, createActor);
router.post('/update/:id', isAuthenticated, updateActor);
router.get('/delete/:id', isAuthenticated, deleteActor);


module.exports = router;