const Show = require('../model/show')
const {body, validationResult} = require('express-validator');
const Genre = require('../model/genre')
const Episode = require('../model/episode')


exports.createShow = [
    body('name', 'name is required').notEmpty(),
    body('poster', 'poster is required').notEmpty(),
    body('genre_id', 'genre is required').notEmpty(),
    body('description', 'description is required').notEmpty(),
    async (req, res, next) => {
        try {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(400).json({errors: errors.array()});
            }

            const {name, poster, genre_id, description} = req.body;

            let show = await Show.create({
                name,
                poster,
                genre_id,
                description
            })

            return res.status(200).json({
                'message': 'show created successfully',
                'show': show
            })

        } catch (error) {
            return res.status(500).json({
                'message': error.message
            })
        }

    }
]

exports.getShows = async (req, res, next) => {
    try {
        let shows = await Show.findAll({
            include: [
                {'model': Genre},
                {'model': Episode}
            ]
        });

        return res.status(200).json({
            'message': 'shows fetched successfully',
            'shows': shows
        })
    } catch (error) {
        return res.status(500).json({
            'message': error.message,
        })
    }
}

exports.updateShow = [
    body('name', 'name is required').notEmpty(),
    body('poster', 'poster is required').notEmpty(),
    body('genre_id', 'genre is required').notEmpty(),
    body('description', 'description is required').notEmpty(),
    async (req, res, next) => {
        try {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(400).json({errors: errors.array()});
            }

            const {name, poster, genre_id, description} = req.body;


            let show = await Show.findByPk(req.params.id);

            show.set({
                name,
                poster,
                genre_id,
                description
            });

            await show.save();


            return res.status(200).json({
                'message': 'show updated successfully',
                'show': show
            })


        } catch (error) {
            return res.status(500).json({
                'message': error.message,
            })
        }
    }
]


exports.deleteShow = async (req, res, next) => {
    try {
        let show = await Show.findByPk(req.params.id);

        await show.destroy();
        return res.status(500).json({
            'message': 'show deleted successfully',
            'show': show
        })

    } catch (error) {
        return res.status(500).json({
            'message': error.message,
        })
    }
}