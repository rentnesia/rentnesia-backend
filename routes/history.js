const express = require("express");
const router = express.Router();

const HistoryController = require("../controllers/HistoryController");

router
  .route("/")
  .get(HistoryController.getAllHistory)
  .post(HistoryController.createNewHistory);

router.get("/:id", HistoryController.getHistoryById);

module.exports = router;
