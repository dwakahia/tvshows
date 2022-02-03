const {Sequelize} = require('sequelize');
const sequelize = new Sequelize('tvshow', 'homestead', 'secret', {
    dialect: 'mysql',
    host: '192.168.56.56',
    port: 3306
})

//const sequelize = new Sequelize(process.env.CLEARDB_DATABASE_URL);

module.exports = sequelize;