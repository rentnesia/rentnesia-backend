"use strict";
module.exports = (sequelize, DataTypes) => {
  const category = sequelize.define(
    "category",
    {
      name: DataTypes.STRING
    },
    {}
  );
  category.associate = function(models) {
    models.category.hasMany(models.product_type, {
      onDelete: "CASCADE",
      foreignKey: "category_id",
      targetKey: "id"
    });
  };
  return category;
};
