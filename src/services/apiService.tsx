// apiService.js

import { LOGIN_URL, REGISTER_URL } from "constants/api";

const apiService = {
  login: async (email: string, password: string) => {
    const response = await fetch(LOGIN_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    return response.json();
  },

  register: async (email: string, password: string) => {
    const response = await fetch(REGISTER_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    return response.json();
  },

  // Add other API calls as needed
};

export default apiService;
