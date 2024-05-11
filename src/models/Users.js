const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('users', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
          },
          username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
          },
          password: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          description: {
            type: DataTypes.STRING,
            allowNull: true,
          }
    },{timestamps: false})
}