const Stock = require("../models/Stock");

// Add a new stock
exports.addStock = async (req, res) => {
  try {
    const { name, ticker, quantity, buyPrice } = req.body;
    const stock = new Stock({ name, ticker, quantity, buyPrice });
    await stock.save();
    res.status(201).json(stock);
  } catch (error) {
    res.status(500).json({ message: "Error adding stock", error });
  }
};

// Get all stocks
exports.getStocks = async (req, res) => {
  try {
    const stocks = await Stock.find();
    res.status(200).json(stocks);
  } catch (error) {
    res.status(500).json({ message: "Error fetching stocks", error });
  }
};

// Update a stock
exports.updateStock = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const stock = await Stock.findByIdAndUpdate(id, updates, { new: true });
    if (!stock) return res.status(404).json({ message: "Stock not found" });
    res.status(200).json(stock);
  } catch (error) {
    res.status(500).json({ message: "Error updating stock", error });
  }
};

// Delete a stock
exports.deleteStock = async (req, res) => {
  try {
    const { id } = req.params;
    const stock = await Stock.findByIdAndDelete(id);
    if (!stock) return res.status(404).json({ message: "Stock not found" });
    res.status(200).json({ message: "Stock deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting stock", error });
  }
};
