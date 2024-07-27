import { publicRequest } from "../Request/RequestMethod";

export const loginApi = async (loginCread) => {
  try {
    const response = await publicRequest.post("users/login", loginCread);
    console.log("login successful", response.data);
    return response.data.message;
  } catch (err) {
    console.log("error in login api", err);
    throw err; // Re-throw the error to be handled by the caller
  }
};