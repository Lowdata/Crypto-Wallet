import axios from 'axios';

const BASE_URL = 'https://api.coingecko.com/api/v3';


const apiService = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getUSDTPrice = async (network) => {
  try {
    const response = await apiService.get('/simple/price', {
      params: {
        ids: 'tether',
        vs_currencies: 'usd',
      },
    });

    return response.data.tether.usd;
  } catch (error) {
    console.error(`Error fetching USDT price for ${network}:`, error);
    throw error;
  }
};

export const getBitcoinPrice = async () => {
  try {
    const response = await apiService.get('/simple/price', {
      params: {
        ids: 'bitcoin',
        vs_currencies: 'usd',
      },
    });

    return response.data.bitcoin.usd;
  } catch (error) {
    console.error('Error fetching Bitcoin price:', error);
    throw error;
  }
};