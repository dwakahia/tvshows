const {DataTypes} = require('sequelize');
const sequelize = require('../util/database');
const User = require('../model/user')
const Show = require('../model/show')

const subscriptions = sequelize.define('subscriptions', {
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

subscriptions.belongsTo(User, {
    foreignKey: 'user_id', onDelete: 'CASCADE'
})

subscriptions.belongsTo(Show, {
    foreignKey: 'show_id', onDelete: 'CASCADE'
})

module.exports = subscriptions;