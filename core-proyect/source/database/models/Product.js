module.exports = (sequelize, dataTypes) => {
  let alias = "Product";

  let cols = {
    sku: {
      type: dataTypes.BIGINT(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: dataTypes.BIGINT(11),
      allowNull: false,
    },
    category_sku: {
      type: dataTypes.BIGINT(11),
      allowNull: true,
      defaultValue: 1,
    },
    season_sku: {
      type: dataTypes.BIGINT(11),
      allowNull: true,
      defaultValue: 1,
    },
    image: {
      type: dataTypes.TEXT,
      allowNull: true,
      defaultValue: "default-gift-image.png",
    },
  };

  let config = {
    timestamps: false,
    deletedAt: false,
  };

  const Product = sequelize.define(alias, cols, config);

  Product.associate = function (models) {
    Product.belongsTo(models.Category, {
      as: "Category",
      foreignKey: "category_sku",
      otherKey: "id",
    });
    Product.belongsTo(models.Season, {
      as: "Season",
      foreignKey: "season_sku",
      otherKey: "id",
    });
  };

  return Product;
};
