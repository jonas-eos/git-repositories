import axios from 'axios';

/**
 * Create a base URL using axios library
 * Use the github api address as the baseUrl
 *
 * @const api
 */
const api = axios.create({
  baseURL: 'https://api.github.com',
});

export default api;
