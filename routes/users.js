const express = require("express");
const router = express.Router();

const UserController = require("../controllers/UserController");
const ItemController = require("../controllers/ItemController");
const HistoryController = require("../controllers/HistoryController");
const isAuthenticated = require("../middlewares").isAuthenticated;

router.get("/", UserController.getUser);

router
  .route("/:id")
  .get(UserController.getUserById)
  .put(UserController.updateUserById)
  .delete(UserController.deleteUserById);

router
  .route("/:id/item")
  .get(ItemController.getAllUserItems)
  .post(ItemController.createNewItem);

router.route("/:id/history").get(HistoryController.getHistoryByUserId);
module.exports = router;
