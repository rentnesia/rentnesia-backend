const express = require("express");
const router = express.Router();

const UserController = require("../controllers/UserController");
const ItemController = require("../controllers/ItemController");
const isAuthenticated = require("../middlewares").isAuthenticated;

router.get("/", UserController.getUser);

router
  .route("/:id")
  .get(isAuthenticated, UserController.getUserById)
  .delete(isAuthenticated, UserController.deleteUserById);

router
  .route("/:id/item")
  .get(isAuthenticated, ItemController.getAllUserItems)
  .post(isAuthenticated, ItemController.createNewItem);

module.exports = router;
