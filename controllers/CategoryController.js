const Category = require("../models").category;

exports.createCategory = async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.status(200).json({ newCategory });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getAllCategory = async (req, res) => {
  try {
    const category = await Category.findAll();
    res.status(200).json({ category });
  } catch (error) {
    res.status(500).json(error);
  }
};
