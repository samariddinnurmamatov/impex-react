import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API;

const ApiService = {
  fetchData: async ({ url, method, params }) => {
    try {
      const response = await axios({
        method,
        url: `${API_BASE_URL}${url}`,
        params,
      });
      return response.data;
    } catch (error) {
      console.error("API Error:", error);
      throw error;
    }
  },
};

export default ApiService;
