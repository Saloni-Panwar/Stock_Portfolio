const express = require("express");
const {
  addStock,
  getStocks,
  updateStock,
  deleteStock,
} = require("../controllers/stockController");

const router = express.Router();

router.post("/", addStock);
router.get("/", getStocks);
router.put("/:id", updateStock);
router.delete("/:id", deleteStock);

module.exports = router;
