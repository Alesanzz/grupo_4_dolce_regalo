module.exports = (sequelize, dataTypes) => {
  let alias = "User";

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
    lastname: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: dataTypes.BIGINT(11),
      allowNull: false,
    },
    country: {
      type: dataTypes.STRING,
      allowNull: true,
      defaultValue: "Argentina",
    },
    email: {
      type: dataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: dataTypes.BIGINT(11),
      allowNull: false,
    },
    avatar: {
      type: dataTypes.TEXT,
      allowNull: true,
      defaultValue: "default-user-image.png",
    },
    admin: {
      type: dataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0,
    },
  };

  let config = {
    timestamps: false,
    deletedAt: false,
  };

  const User = sequelize.define(alias, cols, config);

  return User;
};
