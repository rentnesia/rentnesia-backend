const Item = require("../models").item;
const Category = require("../models").category;
const User = require("../models").user;

exports.getAllItems = async (req, res) => {
  try {
    const limit = 50 // number of records per page
    let offset = 0
    const itemCount = await Item.findAndCountAll()
    const page = req.query.page
    const search = req.query.search
    const sort_type = req.query.sort_type
    const sort = req.query.sort
    const pages = Math.ceil(itemCount.count / limit)
    offset = limit * (page - 1)

    const item = await Item.findAll({
      where: { name: search },
      limit: limit,
      offset: offset,
      $sort: { id: 1 },
      order: [[sort_type, sort]],
      include: [User, Category]
    })

    res.status(200).json({ data: item, count: itemCount.count, pages: pages })
  } catch (error) {
    res.status(500).json(error)
  }
}

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

// Add filter features 
let filter = {}

filter.where = {}
Object.keys(req.query).map(key => {
  if (key !== "limit" && key !== "offset" && key !== "sort") {
    filter.where[key] = req.query[key]
  }
})

models.items.findAndCountAll(filter).then(item => res.send({
  filter: filter,
  data: item
})).catch(error => res.send({
  message: "error",
  error: error
}))