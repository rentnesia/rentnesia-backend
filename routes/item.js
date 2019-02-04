const express = require("express");
const router = express.Router();

const ItemController = require("../controllers/ItemController");

router.get("/", ItemController.getAllItems);

module.exports = router;
