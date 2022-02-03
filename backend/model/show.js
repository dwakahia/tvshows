const {DataTypes} = require('sequelize');
const sequelize = require('../util/database');

const show = sequelize.define('shows', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: DataTypes.STRING,
    genre_id: {
        type: DataTypes.INTEGER,
    },
    poster: DataTypes.STRING,
    description: DataTypes.TEXT
});

module.exports = show;