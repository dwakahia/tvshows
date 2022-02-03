const {DataTypes} = require('sequelize');
const sequelize = require('../util/database');
const Genre = require('../model/genre')
const Episode = require('../model/episode')

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

show.belongsTo(Genre, {foreignKey: 'genre_id', onDelete: 'CASCADE'});
show.hasMany(Episode, {foreignKey: 'show_id', onDelete: 'CASCADE'})

module.exports = show;