const express = require("express");
const tradingOrderController = require("../controllers/tradingOrder");
const {
  getComments,
  updateComment,
  deleteComment,
} = require("../controllers/tradingOrder");

const router = express.Router();

router.get("/", tradingOrderController.getAll);
router.post("/create", tradingOrderController.update);
router.put("/update", tradingOrderController.remove);

module.exports = router;
