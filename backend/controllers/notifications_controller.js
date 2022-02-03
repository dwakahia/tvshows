const nodeMailer = require('../util/send_mail');
const Subscriptions = require('../model/subscription')
const User = require('../model/user')
const Show = require('../model/show')


exports.sendSubscriptions = async (req, res, next) => {

    try {

        let subscriptions = await Subscriptions.findAll({
            include: [
                {'model': User},
                {'model': Show}
            ],
        })


        for (const subscription of subscriptions) {
            await nodeMailer({
                email: subscription.user.email,
                subject: 'new subject',
                message: 'new message'
            });
        }


        return res.status(200).json({
            'message': 'finished'
        })

    } catch (error) {
        return res.status(500).json({
            'subscriptions': error.message
        })
    }

}