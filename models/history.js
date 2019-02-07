"use strict";
module.exports = (sequelize, DataTypes) => {
  const history = sequelize.define(
    "history",
    {
      startDate: DataTypes.DATE,
      endDate: DataTypes.DATE,
      item_id: DataTypes.INTEGER,
      renter_id: DataTypes.INTEGER,
      status: DataTypes.ENUM("success", "waiting", "rejected")
    },
    {}
  );
  history.associate = function(models) {
    models.history.belongsTo(models.item, {
      onDelete: "CASCADE",
      foreignKey: "item_id",
      targetKey: "id"
    });
    models.history.belongsTo(models.user, {
      onDelete: "CASCADE",
      foreignKey: "renter_id",
      targetKey: "id"
    });
  };
  return history;
};
