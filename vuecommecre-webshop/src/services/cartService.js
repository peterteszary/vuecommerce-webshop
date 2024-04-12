import axios from 'axios';

export const fetchCartItems = () => {
  return axios.get('http://localhost:3000/cart');
};

export const removeItemFromCart = (productId) => {
  return axios.delete(`http://localhost:3000/cart/${productId}`);
};

export const updateCartItemQuantity = (productId, newQuantity) => {
  return axios.put(`http://localhost:3000/cart/${productId}`, { quantity: newQuantity });
};
