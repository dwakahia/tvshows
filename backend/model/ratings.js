const {DataTypes} = require('sequelize');
const sequelize = require('../util/database');
const Show = require('../model/show')

const rating = sequelize.define('ratings', {
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
    rating: {
        allowNull: false,
        type: DataTypes.FLOAT
    }
});


rating.belongsTo(Show, {
    foreignKey: 'show_id', onDelete: 'CASCADE'
})

module.exports = rating;