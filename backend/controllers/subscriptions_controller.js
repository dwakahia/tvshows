const Subscription = require('../model/subscription');
const {Op} = require('sequelize')

exports.toggleSubscribe = async (req, res, next) => {
    try {

        console.log(req.user);
        console.log(req.params.id);

        let subscription = await Subscription.findOne({
            where: {
                [Op.and]: [
                    {'user_id': req.user.id},
                    {'show_id': req.params.id}
                ]
            }
        })

        if (subscription) {

            await Subscription.create({
                'user_id': req.user.id,
                'show_id': req.params.id
            });


            return res.status(200).json({
                'message': 'subscription successfully '
            })
        }


        await subscription.destroy();


        return res.status(200).json({
            'message': 'unsubscribed successfully '
        })

    } catch (error) {
        return res.status(500).json({
            'message': error.message
        })
    }
}

exports.viewSubscriptions = async (req, res, next) => {
    try {

        let subscriptions = await Subscription.findAll({
            where: {'show_id': req.params.id}
        })

        return res.status(200).json({
            'message': 'subscriptions fetched successfully',
            'subscriptions': subscriptions
        })

    } catch (error) {
        return res.status(500).json({
            'message': error.message
        })
    }
}