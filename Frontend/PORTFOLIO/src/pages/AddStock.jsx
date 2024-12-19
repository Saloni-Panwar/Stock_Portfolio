import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";  // Correct
import { addStock, updateStock, getStocks } from "../services/stockService";

const AddStock = () => {
  const [stock, setStock] = useState({
    name: "",
    ticker: "",
    quantity: "",
    buyPrice: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStock = async () => {
      if (id) {
        const data = await getStocks();
        const selectedStock = data.find((stock) => stock._id === id);
        if (selectedStock) {
          setStock(selectedStock);
        }
      }
    };

    fetchStock();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStock({ ...stock, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await updateStock(id, stock);
    } else {
      await addStock(stock);
    }
    navigate("/");
  };

  return (
    <div className="add-stock-container">
      <h1>{id ? "Edit Stock" : "Add Stock"}</h1>
      <form onSubmit={handleSubmit} className="add-stock-form">
        <div className="input-group">
          <label htmlFor="name">Stock Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={stock.name}
            placeholder="Enter Stock Name"
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="input-group">
          <label htmlFor="ticker">Ticker Symbol</label>
          <input
            type="text"
            id="ticker"
            name="ticker"
            value={stock.ticker}
            placeholder="Enter Ticker Symbol"
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="input-group">
          <label htmlFor="quantity">Quantity</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={stock.quantity}
            placeholder="Enter Quantity"
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="input-group">
          <label htmlFor="buyPrice">Buy Price</label>
          <input
            type="number"
            id="buyPrice"
            name="buyPrice"
            value={stock.buyPrice}
            placeholder="Enter Buy Price"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="submit-btn">
            {id ? "Update Stock" : "Add Stock"}
          </button>
          <Link to="/" className="cancel-btn">Cancel</Link>
        </div>
      </form>
    </div>
  );
};

export default AddStock;
