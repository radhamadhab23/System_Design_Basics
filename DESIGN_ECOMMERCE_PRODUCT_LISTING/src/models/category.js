'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Define associations here
     */
    static associate(models) {
      // Example: If Category hasMany Products
      Category.hasMany(models.Product, { foreignKey: 'categoryId' });
    }
  }

  Category.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, {
    sequelize,
    modelName: 'Category',
    tableName: 'Categories', // to match the migration table name
    timestamps: true // this ensures createdAt and updatedAt are handled
  });

  return Category;
};
