const express = require('express');
const router = express.Router();

const {makeComment,deleteComment,updateComment} = require('../controllers/comments_controller')


router.post('/make-comment/:id', makeComment);
router.post('/update-comment/:id', updateComment);
router.post('/delete-comment/:id', deleteComment);

module.exports = router;