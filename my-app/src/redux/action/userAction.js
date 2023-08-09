import axios from "axios";
import { REGISTER_USER, LOGIN_USER, LOGOUT_USER } from "./types";

export async function registerUser(dataToSubmit) {
    const result = await axios.post("api/auth/register", dataToSubmit);
		// console.log(result);
    return {
      type: REGISTER_USER,
      payload: result.data
    };
  }

export async function loginUser(dataToSubmit) {
  const result = await axios.post("api/auth/login", dataToSubmit);
  // console.log(result);
  return {
    type: LOGIN_USER,
    payload: result.data.userId,
  };
}

export function logoutUser() {
  const data = axios.post("api/users/logout");
  return {
    type: LOGOUT_USER,
    payload: data,
  };
}
