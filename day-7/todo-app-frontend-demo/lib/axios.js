import axios from "axios";

/**
 * Custom Axios instance for API calls.
 * We now use an environment variable for the baseURL.
 * The 'NEXT_PUBLIC_' prefix makes it accessible in the browser.
 */
const api = axios.create({
  // This value is pulled from .env.local
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
