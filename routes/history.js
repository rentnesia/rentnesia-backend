const express = require("express");
const router = express.Router();

const HistoryController = require("../controllers/HistoryController");

router
  .route("/")
  .get(HistoryController.getAllHistory)
  .post(HistoryController.createNewHistory);

router
  .route("/:id")
  .get(HistoryController.getHistoryById)
  .put(HistoryController.putHistoryById);

module.exports = router;
