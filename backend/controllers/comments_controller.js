const Comment = require('../model/comments')
const {Op} = require("sequelize");
const {body, validationResult} = require("express-validator");

exports.makeComment = [
    body('comment', 'comment  is required').notEmpty(),
    async (req, res, next) => {
        try {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(400).json({errors: errors.array()});
            }
            const {comment} = req.body;

            let newComment = await Comment.create({
                'user_id': req.user.id,
                'show_id': req.params.id,
                comment
            })

            return res.status(200).json({
                'message': 'comment saved successfully',
                'comment': newComment
            })


        } catch (error) {
            return res.status(500).json({
                'message': error.message,
            })
        }
    }
]

exports.updateComment = [
    body('comment', 'comment  is required').notEmpty(),
    async (req, res, next) => {
        try {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(400).json({errors: errors.array()});
            }
            const {comment} = req.body;

            let newComment = await Comment.findByPk(req.params.id);
            newComment.set({comment});
            await newComment.save();

            return res.status(200).json({
                'message': 'comment updated successfully',
                'comment': newComment
            })


        } catch (error) {
            return res.status(500).json({
                'message': error.message,
            })
        }
    }
]

exports.deleteComment = async (req, res, next) => {
    try {
        let comment = await Comment.findByPk(req.params.id)

        await comment.destroy();

        return res.status(200).json({
            'message': 'comment deleted successfully',
            'comment': commentt
        })

    } catch (error) {
        return res.status(500).json({
            'message': error.message,
        })
    }
}