const express = require("express");
const router = express.Router();

const ItemController = require("../controllers/ItemController");

router.get("/item", ItemController.getAllItems);

module.exports = router;
