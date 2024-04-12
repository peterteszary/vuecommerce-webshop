import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

export const fetchProducts = () => {
  return axios.get(`${BASE_URL}/products`);
};

export const addToCart = (productId) => {
  return axios.post(`${BASE_URL}/cart`, { productId });
};
