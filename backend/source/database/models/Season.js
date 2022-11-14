module.exports = (sequelize, dataTypes) => {
    let alias = "Season";
  
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
  
    const Season = sequelize.define(alias, cols, config);
  
    Season.associate = function (models) {
      Season.hasMany(models.Product, {
        as: "products",
        foreignKey: "category_sku",
        otherKey: "id",
      })};
  
    return Season;
  };
  