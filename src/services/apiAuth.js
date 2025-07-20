import axios from "axios";

const API_BASE_URL = "https://neat-spot-api.vercel.app";

function handleError(error) {
  throw new Error(
    error.response?.data?.message || "Something went wrong. Please try again",
  );
}

export async function login(payload) {
  try {
    const res = await axios.post(
      `${API_BASE_URL}/api/v1/users/login`,
      payload,
      {
        withCredentials: true,
      },
    );
    return res.data;
  } catch (error) {
    handleError(error);
  }
}
export async function logout() {
  try {
    const res = await axios.get(`${API_BASE_URL}/api/v1/users/logout`, {
      withCredentials: true,
    });
    return res.data;
  } catch (error) {
    handleError(error);
  }
}

export async function signup(payload) {
  try {
    const res = await axios.post(
      `${API_BASE_URL}/api/v1/users/signup`,
      payload,
      {
        withCredentials: true,
      },
    );
    return res.data;
  } catch (error) {
    handleError(error);
  }
}

export async function getUser() {
  try {
    const res = await axios.get(`${API_BASE_URL}/api/v1/users/me`, {
      withCredentials: true,
    });
    return res.data;
  } catch (error) {
    handleError(error);
  }
}
