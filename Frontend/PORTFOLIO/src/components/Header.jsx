import React from "react";
import { Link } from "react-router-dom"; 

const Header = () => (
  <header className="header-container">
    <nav className="navbar">
      <div className="logo">
        <Link to="/" className="logo-link">My Portfolio</Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/" className="nav-link">Dashboard</Link>
        </li>
        <li>
          <Link to="/add" className="nav-link">Add Stock</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
