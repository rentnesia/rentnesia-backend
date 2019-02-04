const express = require("express");
const router = express.Router();

const UserController = require("../controllers/UserController");
const ItemController = require("../controllers/ItemController");

router.get("/", UserController.getUser);

router
  .route("/:id")
  .get(UserController.getUserById)
  .delete(UserController.deleteUserById);

router
  .route("/:id/item")
  .get(ItemController.getAllUserItems)
  .post(ItemController.createNewItem);

module.exports = router;
