const Rating = require('../model/ratings')
const {Op} = require("sequelize");


exports.makeRating = async (req, res, next) => {
    try {
        let existingRating = await Rating.findOne({
            where: {
                [Op.and]: [{'user_id': req.user.id}, {'show_id': req.params.id}]
            }
        })

        const {rating} = req.body;

        if (existingRating) {
            existingRating.set({
                rating
            });
            await existingRating.save();

            return res.status(200).json({
                'message': 'rating updated successfully'
            })
        }


        await Rating.create({
            'user_id': req.user.id, 'show_id': req.params.id, rating
        })


        return res.status(200).json({
            'message': 'rating saved successfully'
        })

    } catch (error) {
        return res.status(500).json({
            'message': error.message
        })
    }
}


exports.getRating = async (req, res, next) => {
    try {
        let ratings = await Rating.findAll({
            where: {'show_id': req.params.id}
        });



        ratings.forEach((rating) => {

        })

    } catch (error) {

    }
}