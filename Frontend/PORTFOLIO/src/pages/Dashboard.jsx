import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getStocks, deleteStock } from "../services/stockService";

const Dashboard = () => {
  const [stocks, setStocks] = useState([]);
  const [portfolioValue, setPortfolioValue] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getStocks();
      setStocks(data);

      const total = data.reduce(
        (sum, stock) => sum + stock.buyPrice * stock.quantity,
        0
      );
      setPortfolioValue(total);
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    await deleteStock(id);
    setStocks(stocks.filter((stock) => stock._id !== id));
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Portfolio Dashboard</h1>
        <p className="dashboard-value">
          Total Value: <span>${portfolioValue.toFixed(2)}</span>
        </p>
        <Link to="/add" className="button add-stock-button">
          + Add New Stock
        </Link>
      </header>

      <section className="stocks-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Ticker</th>
              <th>Quantity</th>
              <th>Buy Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {stocks.map((stock) => (
              <tr key={stock._id}>
                <td>{stock.name}</td>
                <td>{stock.ticker}</td>
                <td>{stock.quantity}</td>
                <td>${stock.buyPrice.toFixed(2)}</td>
                <td>
                  <Link to={`/edit/${stock._id}`} className="button edit-button">
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(stock._id)}
                    className="button delete-button"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Dashboard;
