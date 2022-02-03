const User = require('../model/user')
const bcrypt = require('bcrypt');

exports.createUser = async (req, res, next) => {

    try {
        const {name, email, phone} = req.body;

        let user = await User.create({
            name,
            email,
            phone,
            password: bcrypt.hashSync('password', 2)
        });


        return res.status(200).json({
            message: 'user created successfully', user: user
        })

    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }


}


exports.getUsers = async (req, res, next) => {

    try {
        let users = await User.findAll({
            attributes: {
                exclude: ['password']
            }
        });

        return res.status(200).json({
            message: 'users list', users: users
        })

    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }

}


exports.getUserById = async (req, res, next) => {
    try {
        let user = await User.findByPk(req.params.id);
        return res.status(200).json({
            message: 'user fetched', user: user
        })
    } catch (error) {
        return res.status(500).json({
            'message': error.message
        })
    }

}

exports.updateUser = async (req, res, next) => {

    try {

        const {name, email, phone} = req.body;

        let user = await User.findByPk(req.params.id);

        user.set({
            name,
            email,
            phone
        });

        await user.save();

        return res.status(200).json({
            message: 'user updated',
            user: user
        })

    } catch (error) {
        return res.status(500).json({
            'message': error.message
        })
    }

}

exports.deleteUser = async (req, res, next) => {
    try {
        let removedUser = await User.findByPk(req.params.id);

        await removedUser.destroy();

        return res.status(200).json({
            message: 'user deleted successfully',
            user: removedUser
        })
    } catch (error) {
        return res.status(500).json({
            'message': error.message
        })
    }
}