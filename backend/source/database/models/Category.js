module.exports = (sequelize, dataTypes) => {
    let alias = "Category";
  
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
      }
    };
  
    let config = {
      timestamps: false,
      deletedAt: false,
    };
  
    const Category = sequelize.define(alias, cols, config);
  
    Category.associate = function (models) {
      Category.hasMany(models.Product, {
        as: "products",
        foreignKey: "category_sku",
        otherKey: "id",
      })};
  
    return Category;
  };
  