const Genre = require('../model/genre')
const {body, validationResult} = require('express-validator');
const cloudinary = require('../util/cloudinary')


exports.createGenre = [
    body('name', 'name is required').notEmpty(),
    body('poster', 'poster is required').notEmpty(),
    async (req, res, next) => {
        try {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(400).json({errors: errors.array()});
            }

            const {name, poster} = req.body;


           let response =  await cloudinary.uploader.upload(poster,{folder: 'tvshow'});


            let genre = await Genre.create({
                name,
                poster: response.url
            })

            return res.status(200).json({
                'message': 'genre created successfully',
                'genre': genre
            })

        } catch (error) {
            return res.status(500).json({
                'message': error.message
            })
        }

    }
]


exports.getGenres = async (req, res, next) => {
    try {
        let genres = await Genre.findAll();
        return res.status(200).json({
            'message': 'Genres fetched successfully',
            'genres': genres
        })
    } catch (error) {
        return res.status(500).json({
            'message': error.message
        })
    }
}


exports.updateGenre = [
    body('name', 'name is required').notEmpty(),
    body('poster', 'poster is required').notEmpty(),
    async (req, res, next) => {
        try {

            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(400).json({errors: errors.array()});
            }

            const {name, poster} = req.body;

            let genre = await Genre.findByPk(req.params.id);

            genre.set({
                name,
                poster
            });
            await genre.save();

            return res.status(200).json({
                'message': 'genre updated successfully',
                'genre': genre
            })

        } catch (error) {
            return res.status(500).json({
                'message': error.message
            })
        }
    }
]

exports.deleteGenre = async (req, res, next) => {
    try {

        let genre = await Genre.findByPk(req.params.id);

        await genre.destroy();

        return res.status(200).json({
            'message': 'genre updated successfully',
            'genre': genre
        })

    } catch (error) {
        return res.status(500).json({
            'message': error.message
        })
    }
}