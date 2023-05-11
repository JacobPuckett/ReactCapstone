const {DataTypes} = require('sequelize')
const {sequelize} = require('../util/database')

module.exports = {
    MovieList : sequelize.define('movie-list', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        imageUrl: DataTypes.TEXT
    })
}