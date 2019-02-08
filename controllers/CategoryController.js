const ProductType = require("../models").product_type;
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

exports.deleteCategoryById = async (req, res) => {
  try {
    await Category.destroy({ where: { id: req.params.id } });
    res.status(200).json("Category has been slain");
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getAllProductById = async (req, res) => {
  try {
    const data = await ProductType.findAll({
      where: { category_id: req.params.id },
      include: [Category]
    });
    res.status(200).json({ data });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
