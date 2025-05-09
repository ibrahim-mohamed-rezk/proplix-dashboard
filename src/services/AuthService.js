import axios from "axios";
import Swal from "sweetalert2";
import { loginConfirmedAction, Logout } from "../store/actions/AuthActions";
import axiosInstance from "./AxiosInstance";

export function signUp(name, email, password) {
  const postData = {
    name,
    email,
    password,
    returnSecureToken: true,
  };

  return axiosInstance.post(`register`, postData);
}

export function login(email, password) {
  const postData = {
    email,
    password,
  };

  return axiosInstance.post(`login`, postData)
    .then(response => {
      if (response.data.status) {
        return response.data;
      } else {
        throw new Error(response.data.msg || 'Login failed');
      }
    });
}

export function formatError(errorResponse) {
  const message = errorResponse?.message || errorResponse;

  switch (message) {
    case "EMAIL_EXISTS":
      Swal.fire({ icon: "error", title: "Oops", text: "Email already exists" });
      break;
    case "EMAIL_NOT_FOUND":
      Swal.fire({ icon: "error", title: "Oops", text: "Email not found" });
      break;
    case "INVALID_PASSWORD":
      Swal.fire({ icon: "error", title: "Oops", text: "Invalid Password" });
      break;
    case "USER_DISABLED":
      Swal.fire({ icon: "error", title: "Oops", text: "User Disabled" });
      break;
    default:
      Swal.fire({
        icon: "error",
        title: "Oops",
        text: message || "An unknown error occurred",
      });
      break;
  }
}

export function saveTokenInLocalStorage(tokenDetails) {
  tokenDetails.expireDate = new Date(
    new Date().getTime() + (tokenDetails.expiresIn || 3600) * 1000
  );
  localStorage.setItem("userDetails", JSON.stringify(tokenDetails));
}

export function runLogoutTimer(dispatch, timer, navigate) {
  setTimeout(() => {
    dispatch(Logout(navigate));
  }, timer);
}

export function checkAutoLogin(dispatch, navigate) {
  const tokenDetailsString = localStorage.getItem("userDetails");
  if (!tokenDetailsString) {
    dispatch(Logout(navigate));
    return;
  }

  const tokenDetails = JSON.parse(tokenDetailsString);
  const expireDate = new Date(tokenDetails.expireDate);
  const todaysDate = new Date();

  if (todaysDate > expireDate) {
    dispatch(Logout(navigate));
    return;
  }

  dispatch(loginConfirmedAction({
    token: tokenDetails.token,
    data: tokenDetails.user,
    msg: "Auto login successful"
  }));
  
  const timer = expireDate.getTime() - todaysDate.getTime();
  runLogoutTimer(dispatch, timer, navigate);
}