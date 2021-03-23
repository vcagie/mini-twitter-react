import axios from "../api/axios";
import { loginUserRequests, registerUserRequest } from "../api/request";

async function loginUser(username, password) {
  return axios
    .post(loginUserRequests, {
      username: username,
      password: password,
    })
    .then((data) => data.data);
}

async function registerUser(username, password) {
  return axios
    .post(registerUserRequest, {
      username: username,
      password: password,
    })
    .then((data) => data.data);
}

export { loginUser, registerUser };
