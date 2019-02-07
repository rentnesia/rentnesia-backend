const express = require("express");
const router = express.Router();

const ItemController = require("../controllers/ItemController");

router.get("/", ItemController.getAllItems);

router
  .route("/:id")
  .get(ItemController.getItemById)
  .delete(ItemController.deleteItemById);

module.exports = router;
