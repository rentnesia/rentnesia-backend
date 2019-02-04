const Item = require("../models").item;
const Category = require("../models").category;
const User = require("../models").user;

exports.getAllItems = async (req, res) => {
  try {
    const item = await Item.findAll({ include: [User, Category] });
    res.status(200).json({ item });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getAllUserItems = async (req, res) => {
  try {
    const item = await Item.findAll(
      { where: { owner_id: req.params.id } },
      { include: [User, Category] }
    );
    res.status(200).json({ item });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.createNewItem = async (req, res) => {
  try {
    const item = await Item.create({
      ...req.body,
      category_id: req.body.category_id,
      owner_id: req.params.id
    });
    res.status(200).json({ item });
  } catch (error) {
    res.status(500).json(error);
  }
};
