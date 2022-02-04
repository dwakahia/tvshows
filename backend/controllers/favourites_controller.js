const Favourite = require('../model/favourites');
const {Op} = require("sequelize");


exports.toggleFavourites = async (req, res, next) => {
    try {

        let favourite = await Favourite.findOne({
            where: {
                [Op.and]: [
                    {'user_id': req.user.id},
                    {'show_id': req.params.id}
                ]
            }
        })

        if (favourite) {

            await favourite.destroy();

            return res.status(200).json({
                'message': 'Removed from favourites',
                'status': 0
            })

        }

        await Favourite.create({
            'user_id': req.user.id,
            'show_id': req.params.id
        });

        return res.status(200).json({
            'message': 'Marked as favourite',
            'status': 1
        })

    } catch (error) {
        return res.status(500).json({
            'message': error.message,
        })
    }
}