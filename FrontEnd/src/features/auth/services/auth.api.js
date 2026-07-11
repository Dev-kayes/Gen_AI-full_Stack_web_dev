import axios from "axios";

export async function register({ userName, email, password }) {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/auth/register",
      { userName, email, password },
      // withCredantials: true allows the cookie to be sent with the request
      { withCredentials: true },
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
export async function login({ email, password }) {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/auth/login",
      { email, password },
      { withCredentials: true },
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function logOut() {
  try {
    const response = await axios.get("http://localhost:3000/api/auth/logout", {
      withCredentials: true,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getMe() {
  try {
    const response = await axios.get("http://localhost:3000/api/auth/me", {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
