// const express = require("express");
// const {
//   addStock,
//   getStocks,
//   updateStock,
//   deleteStock,
// } = require("../controllers/stockController");

// const router = express.Router();


// router.post("/", addStock);
// router.get("/", getStocks);
// router.put("/:id", updateStock);
// router.delete("/:id", deleteStock);

// module.exports = router;
const express = require("express");
const {
  addStock,
  getStocks,
  updateStock,
  deleteStock,
} = require("../controllers/stockController");

const router = express.Router();

/**
 * @openapi
 * /api/stocks:
 *   get:
 *     description: Get all stocks
 *     responses:
 *       200:
 *         description: A list of stocks
 */
router.get("/", getStocks);

/**
 * @openapi
 * /api/stocks:
 *   post:
 *     description: Add a new stock to the portfolio
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               ticker:
 *                 type: string
 *               quantity:
 *                 type: number
 *               buyPrice:
 *                 type: number
 *     responses:
 *       201:
 *         description: Stock added successfully
 */
router.post("/", addStock);

/**
 * @openapi
 * /api/stocks/{id}:
 *   put:
 *     description: Update an existing stock's details
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The stock ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               ticker:
 *                 type: string
 *               quantity:
 *                 type: number
 *               buyPrice:
 *                 type: number
 *     responses:
 *       200:
 *         description: Stock updated successfully
 *       404:
 *         description: Stock not found
 */
router.put("/:id", updateStock);

/**
 * @openapi
 * /api/stocks/{id}:
 *   delete:
 *     description: Delete a stock by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The stock ID
 *     responses:
 *       200:
 *         description: Stock deleted successfully
 *       404:
 *         description: Stock not found
 */
router.delete("/:id", deleteStock);

module.exports = router;
