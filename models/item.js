"use strict";
module.exports = (sequelize, DataTypes) => {
  const item = sequelize.define(
    "item",
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      label: DataTypes.STRING,
      price_per_day: DataTypes.DOUBLE,
      status: DataTypes.ENUM("available", "rented", "not available"),
      picture: DataTypes.STRING,
      product_type: DataTypes.STRING
    },
    {}
  );
  item.associate = function(models) {
    models.item.belongsTo(models.user, {
      onDelete: "CASCADE",
      foreignKey: "owner_id",
      targetKey: "id"
    });
    models.item.belongsTo(models.user, {
      onDelete: "CASCADE",
      foreignKey: "category_id",
      targetKey: "id"
    });
  };
  return item;
};
