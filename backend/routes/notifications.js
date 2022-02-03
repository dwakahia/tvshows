const express = require('express');
const router = express.Router();
const isAuthenticated = require('../middlewares/is_auth')

const {sendSubscriptions} = require('../controllers/notifications_controller')

router.get('/send-show-subscribers/:id', isAuthenticated, sendSubscriptions)

module.exports = router;