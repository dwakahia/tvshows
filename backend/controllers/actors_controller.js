const Actor = require('../model/actors')
const {body, validationResult} = require('express-validator');


exports.createActor = [
    body('name', 'name is required').notEmpty(),
    body('photo', 'poster is required').notEmpty(),
    body('basic_info', 'show is required').notEmpty(),
    async (req, res, next) => {
        try {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(400).json({errors: errors.array()});
            }

            const {name, photo, basic_info} = req.body;

            let actor = await Actor.create({
                name,
                photo,
                basic_info
            });


            return res.status(200).json({
                'message': 'actor created successfully',
                'actor': actor
            })

        } catch (error) {
            return res.status(500).json({
                'message': error.message
            })
        }
    }
]


exports.getAllActors = async (req, res, next) => {
    try {

        let actors = await Actor.findAll();

        return res.status(200).json({
            'message': 'actors fetched successfully',
            'actors': actors
        })

    } catch (error) {
        return res.status(500).json({
            'message': error.message
        })
    }
}

exports.updateActor = [
    body('name', 'name is required').notEmpty(),
    body('photo', 'poster is required').notEmpty(),
    body('basic_info', 'show is required').notEmpty(),
    async (req, res, next) => {
        try {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(400).json({errors: errors.array()});
            }

            const {name, photo, basic_info} = req.body;

            let actor = await Actor.findByPk(req.params.id);

            actor.set({
                name,
                photo,
                basic_info
            });

            await actor.save();


            return res.status(200).json({
                'message': 'actor updated successfully',
                'actor': actor
            })

        } catch (error) {
            return res.status(500).json({
                'message': error.message
            })
        }
    }
]


exports.deleteActor = async (req, res, next) => {
    try {
        let actor = await Actor.findByPk(req.params.id);
        await actor.destroy();

        return res.status(200).json({
            'message': 'actor deleted successfully',
            'actor': actor
        })

    } catch (error) {
        return res.status(500).json({
            'message': error.message
        })
    }
}