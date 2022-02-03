const express = require('express');
const router = express.Router();
const isAuthenticated = require('../middlewares/is_auth')

const {toggleSubscribe, viewSubscriptions} = require('../controllers/subscriptions_controller')

router.get('/toggle-subscriptions/:id', isAuthenticated, toggleSubscribe);
router.get('/view-subscriptions/:id', isAuthenticated, viewSubscriptions)

module.exports = router;