const User = require('../model/user')
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

exports.login = async (req, res, next) => {

    try {
        const {email, password} = req.body;

        let user = await User.findOne({where: {email: email}});

        if (!user) {
            return res.status(404).json({
                message: 'no user found with the email address'
            })
        }

        let match = await bcrypt.compare(password, user.password);

        if (!match) {
            return res.status(401).json({
                message: 'password and email do not match'
            })
        }

        const token = jwt.sign({
            email: user.email,
            userId: user.id.toString()
        }, 'secret')



        return res.status(200).json({
            token,
            user
        })
    } catch (error) {
        return res.status(500).json({
            'message': error.message
        })
    }
}

exports.register = async (req, res, next) => {
    try {
        const {name, email, password} = req.body;


        let user = await User.findOne({where: {email: email}});

        if (user) {
            return res.status(419).json({
                message: 'A user exists with the email address'
            })
        }

        let hashedPassword =  bcrypt.hashSync(password, 2);

        let newUser = await User.create({
            name,
            email,
            password: hashedPassword
        });

        return res.status(200).json({
            message: 'user created successfully', user: newUser
        });
    } catch (error) {
        return res.status(500).json({
            'message': error.message,
            'errors': error.errors[0]['message'],
            'errorsd': error
        })
    }
}