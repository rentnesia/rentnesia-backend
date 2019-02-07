const express = require("express");
const router = express.Router();

const ProductTypeController = require("../controllers/ProductTypeController");

router
  .route("/")
  .post(ProductTypeController.createProductType)
  .get(ProductTypeController.getAllProductType);

router.route("/:id").delete(ProductTypeController.deleteProductById);

module.exports = router;
