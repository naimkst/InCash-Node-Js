const express = require("express");
const tradingOrderController = require("../controllers/tradingOrder");

const router = express.Router();

router.get("/trading-orders", tradingOrderController.getAll);
router.post("/create", tradingOrderController.orderStore);
router.put("/update", tradingOrderController.update);
router.get("/trading-order", tradingOrderController.orderResult);

module.exports = router;
