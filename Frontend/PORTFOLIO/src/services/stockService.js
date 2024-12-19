import axios from "axios";

const API_URL = "http://localhost:5000/api/stocks";

export const getStocks = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addStock = async (stock) => {
  const response = await axios.post(API_URL, stock);
  return response.data;
};

export const updateStock = async (id, stock) => {
  const response = await axios.put(`${API_URL}/${id}`, stock);
  return response.data;
};

export const deleteStock = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};

