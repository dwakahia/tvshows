const Episode = require('../model/episode')
const {body, validationResult} = require('express-validator');


exports.createEpisode = [
    body('name', 'name is required').notEmpty(),
    body('poster', 'poster is required').notEmpty(),
    body('show_id', 'show is required').notEmpty(),
    body('link', 'show is required').notEmpty(),
    body('premiere_date', 'premiere date is required').notEmpty(),
    async (req, res, next) => {
        try {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(400).json({errors: errors.array()});
            }

            const {name, poster, show_id, link, premiere_date} = req.body;

            let episode = await Episode.create({
                name,
                poster,
                show_id,
                link,
                premiere_date
            })

            return res.status(200).json({
                'message': 'episode created successfully',
                'episode': episode
            })

        } catch (error) {
            return res.status(500).json({
                'message': error.message
            })
        }
    }
]

exports.getEpisodesPerShow = async (req, res, next) => {
    try {

        let episodes = await Episode.findAll({where: {'show_id': req.params.id}});

        return res.status(200).json({
            'message': 'Episodes fetched successfully',
            'episodes': episodes
        })

    } catch (error) {
        return res.status(500).json({
            'message': error.message
        })
    }
}


exports.updateEpisode = [
    body('name', 'name is required').notEmpty(),
    body('poster', 'poster is required').notEmpty(),
    body('show_id', 'show is required').notEmpty(),
    body('link', 'show is required').notEmpty(),
    body('premiere_date', 'premiere is required').notEmpty(),
    async (req, res, next) => {
        try {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(400).json({errors: errors.array()});
            }

            const {name, poster, show_id, link, premiere_date} = req.body;

            let episode = await Episode.findByPk(req.params.id);

            episode.set({
                name,
                poster,
                show_id,
                link,
                premiere_date
            });


            await episode.save();


            return res.status(200).json({
                'message': 'episode updated successfully',
                'episode': episode
            })

        } catch (error) {
            return res.status(500).json({
                'message': error.message
            })
        }
    }
]


exports.deleteEpisode = async (req, res, next) => {
    try {

        let episode = await Episode.findByPk(req.params.id);

        await episode.destroy();

        return res.status(200).json({
            'message': 'episode deleted successfully',
            'episode': episode
        })

    } catch (error) {
        return res.status(500).json({
            'message': error.message
        })
    }
}