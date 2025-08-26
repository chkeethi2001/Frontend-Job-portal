const BASE_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:5000/api"
    : "https://backend-deply-final-1.onrender.com/api";

export const registerAPI = `${BASE_URL}/auth/register`;
export const loginAPI = `${BASE_URL}/auth/login`;
