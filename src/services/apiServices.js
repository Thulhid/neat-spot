import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function handleError(error) {
  throw new Error(
    error.response?.data?.message || "Something went wrong. Please try again",
  );
}

export async function getServices() {
  try {
    const res = await axios.get(`${API_BASE_URL}/api/v1/services`, {
      withCredentials: true,
    });
    return res.data;
  } catch (error) {
    handleError(error);
  }
}

export async function createService(payload) {
  try {
    const res = await axios.post(`${API_BASE_URL}/api/v1/services`, payload, {
      withCredentials: true,
    });
    return res.data;
  } catch (error) {
    handleError(error);
  }
}
