const Item = require("../models").item;
const ProductType = require("../models").product_type;
const Category = require("../models").category;
const User = require("../models").user;

exports.getAllItems = async (req, res) => {
  try {
    const limit = 10; // number of records per page
    let offset = 0;
    const itemCount = await Item.findAndCountAll();
    const page = req.query.page;
    const search = req.query.search;
    const sort_type = req.query.sort_type;
    const sort = req.query.sort;
    const pages = Math.ceil(itemCount.count / limit);
    offset = limit * (page - 1);

    const item = await Item.findAll({
      include: [
        {
          model: ProductType,
          include: [Category]
        },
        User
      ]
    });
    res.status(200).json({ item, limit, page, pages, offset });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getAllUserItems = async (req, res) => {
  try {
    const item = await Item.findAll(
      { where: { owner_id: req.params.id } },
      {
        include: [
          {
            model: ProductType,
            include: [Category]
          },
          User
        ]
      }
    );
    res.status(200).json({ item });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getItemById = async (req, res) => {
  try {
    const item = await Item.findAll({
      where: { id: req.params.id },
      include: [
        {
          model: ProductType,
          include: [Category]
        },
        User
      ]
    });
    res.status(200).json({ item });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.deleteItemById = async (req, res) => {
  try {
    await Item.destroy({ where: { id: req.params.id } });
    res.status(200).json("Category has been slain");
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.createNewItem = async (req, res) => {
  try {
    const item = await Item.create({
      ...req.body,
      owner_id: req.params.id
    });
    res.status(200).json({ item });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
