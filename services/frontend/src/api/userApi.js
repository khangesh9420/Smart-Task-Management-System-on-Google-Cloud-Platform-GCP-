import axios from 'axios';

const BASE_URL = 'http://localhost:5000/users/';  // Update this when deploying to cloud

export const createUser = (userData) => axios.post(BASE_URL, userData);
export const fetchUsers = () => axios.get(BASE_URL);
