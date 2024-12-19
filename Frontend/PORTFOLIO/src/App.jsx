import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AddStock from "./pages/AddStock";
import Header from "./components/Header";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add" element={<AddStock />} />
        <Route path="/edit/:id" element={<AddStock />} />
      </Routes>
    </Router>
  );
};

export default App;
