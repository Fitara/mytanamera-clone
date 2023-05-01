"use strict";
const { slug } = require("../helpers/slugy")
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Category, { foreignKey: "categoryId" });
      Product.hasMany(models.Images, { foreignKey: "productId"})
    }
  }
  Product.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Name is required" },
          notNull: { msg: "Name is required" },
        },
      },
      slug: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Slug is required" },
          notNull: { msg: "Slug is required" },
        },
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Description is required" },
          notNull: { msg: "Description is required" },
        },
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Price is required" },
          notNull: { msg: "Price is required" },
          min: { args: 5000, msg: "Minimum price Rp. 75.000" },
        },
      },
      mainImg: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Image is required" },
          notNull: { msg: "Image is required" },
        },
      },
      categoryId: DataTypes.INTEGER,
      authorId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  Product.beforeValidate((product) => {
      product.slug = slug(product.name)
  });

  return Product;
};
