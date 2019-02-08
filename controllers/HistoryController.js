const Item = require("../models").item;
const History = require("../models").history;
const User = require("../models").user;

exports.getAllHistory = async (req, res) => {
  try {
    //   const limit = 10; // number of records per page
    //   let offset = 0;
    //   const itemCount = await Item.findAndCountAll();
    // const page = req.query.page;
    // const search = req.query.search;
    // const sort_type = req.query.sort_type;
    // const sort = req.query.sort;
    // const pages = Math.ceil(itemCount.count / limit);
    // offset = limit * (page - 1);

    // where: { name: search },
    // limit: limit,
    // offset: offset,
    // $sort: { id: 1 },
    // order: [sort_type, sort],
    const history = await History.findAll({
      include: [Item, User]
    });

    res.status(200).json({ history });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

exports.getHistoryById = async (req, res) => {
  try {
    const history = await History.findOne(
      { include: [Item, User] },
      { where: { id: req.params.id } }
    );
    res.status(200).json({ history });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.putHistoryById = async (req, res) => {
  try {
    History.findOne({ where: { id: req.params.id } }).then(history => {
      if (history) {
        return history
          .update({ status: req.body.status })
          .then(updated_history =>
            res.send({
              message: "update data success",
              data: updated_history
            })
          )
          .catch(err => Promise.reject(err));
      } else {
        res.send({
          message: "data not found"
        });
      }
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.createNewHistory = async (req, res) => {
  try {
    const history = await History.create({
      ...req.body,
      renter_id: req.body.renter_id,
      item_id: req.body.item_id
    });
    res.status(200).json({ history });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
