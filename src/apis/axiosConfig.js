import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_URL || '';

export const getAuthAxios = (token) => {
  return axios.create({
    baseURL: API_BASE,
    headers: {
      ...(token && { Authorization: `Bearer ${token}` }),
    },
  });
};
