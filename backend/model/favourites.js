const {DataTypes} = require('sequelize');
const sequelize = require('../util/database');
const User = require('../model/user')
const Show = require('../model/show')

const favourite = sequelize.define('favourites', {
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
});


favourite.belongsTo(User, {
    foreignKey: 'user_id', onDelete: 'CASCADE'
})

favourite.belongsTo(Show, {
    foreignKey: 'show_id', onDelete: 'CASCADE'
})

module.exports = favourite;