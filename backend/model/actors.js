const {DataTypes} = require('sequelize');
const sequelize = require('../util/database');

const actor = sequelize.define('actors', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: DataTypes.STRING,
    photo: DataTypes.STRING,
    basic_info: DataTypes.TEXT,
});

module.exports = actor;