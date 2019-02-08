const Item = require("../models").item;
const ProductType = require("../models").product_type;
const Category = require("../models").category;
const User = require("../models").user;

exports.getAllItems = async (req, res) => {
  if (Object.keys(req.query).length > 0) {
    let search = req.query.search || "";
    let sort = req.query.sort || "ASC";

    let itemCondition = { name: { $like: `%${search}%` } };
    let categoryCondition = {};

    if (req.query.product_type) {
      Object.assign(itemCondition, {
        product_type_id: parseInt(req.query.product_type)
      });
    }
    if (req.query.not_user) {
      Object.assign(itemCondition, {
        owner_id: { $not: parseInt(req.query.not_user) }
      });
    }

    if (req.query.category) {
      Object.assign(categoryCondition, { category_id: req.query.category });
    }

    Item.findAll({
      where: itemCondition,
      order: [["createdAt", sort]],
      include: [{ model: ProductType, where: categoryCondition }, User]
    })
      .then(item => res.status(200).json({ item }))
      .catch(err => res.status(500).json(err));
  } else {
    Item.findAll({
      include: [
        {
          model: ProductType,
          include: [Category]
        },
        User
      ]
    })
      .then(item => res.status(200).json({ item }))
      .catch(err => res.status(500).json(err));
  }
};

exports.getAllUserItems = async (req, res) => {
  try {
    const item = await Item.findAll({
      where: { owner_id: req.params.id },
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
