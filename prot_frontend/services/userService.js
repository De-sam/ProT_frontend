import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/userauth/register/';

export const registerUser = async (formData) => {
  // Extract only the required parameters from formData
  const {  email, password1, password2, first_name, last_name } = formData;

  try {
    const response = await axios.post(API_URL, {
      first_name,
      last_name,
      email,
      password1,
      password2
    });
    return response.data;
  } catch (error) {
    console.error('API Error:', error.response?.data || error.message);
    throw new Error(error.response?.data || error.message);
  }
};
