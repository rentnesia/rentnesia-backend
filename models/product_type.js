'use strict';
module.exports = (sequelize, DataTypes) => {
  const product_type = sequelize.define('product_type', {
    name: DataTypes.STRING
  }, {});
  product_type.associate = function (models) {
    models.product_type.hasMany(models.item, {
      foreignKey: "category_id",
      sourceKey: "id"
    });
  };
  return product_type;
};