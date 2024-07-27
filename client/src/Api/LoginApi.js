// src/Api/LoginApi.js
import { publicRequest } from "../Request/RequestMethod";

export const loginApi = async (loginCread) => {
  try {
    const response = await publicRequest.post("users/login", loginCread);
    console.log("login response", response); // Log the entire response
    return response.data; // Return the entire data object, not just the message
  } catch (err) {
    console.log("error in login api", err);
    throw err; // Re-throw the error to be handled by the caller
  }
};
