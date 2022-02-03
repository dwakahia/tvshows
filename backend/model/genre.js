
const {DataTypes} = require('sequelize');
const sequelize = require('../util/database');

const genre = sequelize.define('genre', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        unique: true
    },
    poster: DataTypes.STRING
});



module.exports = genre;