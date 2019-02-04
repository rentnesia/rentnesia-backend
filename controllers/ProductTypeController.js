const ProductType = require('../models').product_type

exports.createProductType = async (req, res) => {
  try {
    const newProductType = await ProductType.create(req.body)
    res.status(200).json({ newProductType })
  } catch (error) {
    res.status(500).json(error)
  }
}

exports.getAllProductType = async (req, res) => {
  try {
    const product_type = await ProductType.findAll()
    res.status(200).json({ product_type })
  } catch (error) {
    res.status(500).json(error)
  }
}
