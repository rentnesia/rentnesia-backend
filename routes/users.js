const express = require("express");
const router = express.Router();

const UserController = require("../controllers/UserController");
const ItemController = require("../controllers/ItemController");
const isAuthenticated = require('../middlewares').isAuthenticated


router.get("/", isAuthenticated, UserController.getUser);

router
  .route("/:id")
  .get(UserController.getUserById)
  .delete(UserController.deleteUserById);

router
  .route("/:id/item")
  .get(ItemController.getAllUserItems)
  .post(isAuthenticated, ItemController.createNewItem);

module.exports = router;
