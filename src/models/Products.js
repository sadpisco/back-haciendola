const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('products', {
          handle:{
            type: DataTypes.STRING,
            allowNull: false,
          },
          title:{
            type: DataTypes.STRING,
            allowNull: false,
          },
          description:{
            type: DataTypes.TEXT,
            allowNull: false,
          },
          sku:{
            type: DataTypes.BIGINT,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
          },
          grams:{
            type: DataTypes.FLOAT,
            allowNull: false,
          },
          stock:{
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          price:{
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          comparePrice:{
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          barcode:{
            type: DataTypes.BIGINT,
            allowNull: false,
          }
    },{timestamps: false})
}