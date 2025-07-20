import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function handleError(error) {
  throw new Error(
    error.response?.data?.message || "Something went wrong. Please try again",
  );
}

export async function getMyBookings() {
  try {
    const res = await axios.get(`${API_BASE_URL}/api/v1/bookings`, {
      withCredentials: true,
    });
    return res.data;
  } catch (error) {
    handleError(error);
  }
}

export async function deleteMyBooking(id) {
  try {
    await axios.delete(`${API_BASE_URL}/api/v1/bookings/${id}`, {
      withCredentials: true,
    });
  } catch (error) {
    handleError(error);
  }
}
export async function deleteBooking(id) {
  try {
    await axios.delete(`${API_BASE_URL}/api/v1/bookings/${id}`, {
      withCredentials: true,
    });
  } catch (error) {
    handleError(error);
  }
}

export async function updateBooking({ id, payload }) {
  try {
    const response = await axios.put(
      `${API_BASE_URL}/api/v1/bookings/${id}`,
      payload,
      { withCredentials: true },
    );
    return response.data;
  } catch (error) {
    handleError(error);
  }
}

export async function createMyBooking(payload) {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/api/v1/bookings`,
      payload,
      { withCredentials: true },
    );
    return response.data;
  } catch (error) {
    handleError(error);
  }
}

export async function getBookings() {
  try {
    const res = await axios.get(`${API_BASE_URL}/api/v1/bookings/all`, {
      withCredentials: true,
    });
    return res.data;
  } catch (error) {
    handleError(error);
  }
}
