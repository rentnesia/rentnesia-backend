"use strict";
module.exports = (sequelize, DataTypes) => {
  const product_type = sequelize.define(
    "product_type",
    {
      name: DataTypes.STRING,
      category_id: DataTypes.INTEGER
    },
    {}
  );
  product_type.associate = function(models) {
    models.product_type.belongsTo(models.category, {
      foreignKey: "category_id",
      sourceKey: "id"
    });
    models.product_type.hasMany(models.item, {
      foreignKey: "product_type_id",
      sourceKey: "id"
    });
  };
  return product_type;
};
