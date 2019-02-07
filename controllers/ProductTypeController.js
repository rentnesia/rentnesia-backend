const ProductType = require("../models").product_type;
const Category = require("../models").category;

exports.createProductType = async (req, res) => {
  try {
    const newProductType = await ProductType.create(req.body);
    res.status(200).json({ newProductType });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getAllProductType = async (req, res) => {
  try {
    const product_type = await ProductType.findAll({
      include: [Category]
    });
    res.status(200).json({ product_type });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.deleteProductById = async (req, res) => {
  try {
    await ProductType.destroy({ where: { id: req.params.id } });
    res.status(200).json("Product has been slain");
  } catch (error) {
    res.status(500).json(error);
  }
};
