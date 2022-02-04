const {DataTypes} = require('sequelize');
const sequelize = require('../util/database');
const User = require('../model/user')
const Show = require('../model/show')

const comment = sequelize.define('comments', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    show_id: {
        type: DataTypes.INTEGER,
    },
    user_id: {
        type: DataTypes.INTEGER,
    },
    comment: {
        allowNull: false,
        type: DataTypes.TEXT
    }
});


comment.belongsTo(User, {
    foreignKey: 'user_id', onDelete: 'CASCADE'
})

comment.belongsTo(Show, {
    foreignKey: 'show_id', onDelete: 'CASCADE'
})

module.exports = comment;