import axios from 'axios';

const fetchData = async (method, apiEndpoint, data) => {
     let baseUrl = '';

     // Check if the URL scheme is HTTPS
     if (typeof window !== 'undefined' && window.location.protocol === 'https:') {
          baseUrl = 'https://oneclick-server.onrender.com';
     } else {
          baseUrl = 'http://192.168.0.115:8080';
     }

     try {
          const response = await axios({
               method: method, // Pass the method dynamically
               url: `${baseUrl}${apiEndpoint}`,
               data: data
          });
          return response.data;
     } catch (error) {
          console.error('Error fetching data:', error);
          return null;
     }
};

export default fetchData;
