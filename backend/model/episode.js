const {DataTypes} = require('sequelize');
const sequelize = require('../util/database');

const episode = sequelize.define('episodes', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: DataTypes.STRING,
    show_id: DataTypes.INTEGER,
    link: DataTypes.STRING,
    date_premiere: DataTypes.DATE,
    poster: DataTypes.STRING
});

module.exports = episode;