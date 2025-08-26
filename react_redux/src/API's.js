const BASE_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:5000"
    : "https://backend-deply-final-1.onrender.com/api";

export const registerAPI = ${BASE_URL}/api/auth/register;
export const loginAPI = ${BASE_URL}/api/auth/login;
