const {DataTypes} = require('sequelize');
const sequelize = require('../util/database');

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

module.exports = subscriptions;