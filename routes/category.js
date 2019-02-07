const express = require("express");
const router = express.Router();

const CategoryController = require("../controllers/CategoryController");

router
  .route("/")
  .post(CategoryController.createCategory)
  .get(CategoryController.getAllCategory);

router
  .route("/:id")
  .delete(CategoryController.deleteCategoryById)
  .get(CategoryController.getAllProductById);

module.exports = router;
