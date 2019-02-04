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
    models.category.hasMany(models.item, {
      foreignKey: "owner_id",
      sourceKey: "id"
    });
  };
  return category;
};
