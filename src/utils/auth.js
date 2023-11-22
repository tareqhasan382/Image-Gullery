import { getFromLocalStorage, setToLocalStorage } from "./local-storage";
// import { instance } from "@/helpers/axios/axiosInstance";
// import { getBaseUrl } from "@/helpers/config/envConfig";
// import { decodedToken } from "./jwt";
import { authKey } from "./authKey";
import { jwtDecode } from "jwt-decode";
export const storeUserInfo = (token) => {
  // console.log("AccessToken:", token);
  // localStorage.setItem(authKey, token);
  return setToLocalStorage(authKey, token);
};
export const getUserInfo = () => {
  const authToken = getFromLocalStorage(authKey);
  //console.log(authToken);
  if (authToken) {
    const decodedData = jwtDecode(authToken);
    return decodedData;
  } else {
    return "";
  }
};

export const isLoggedIn = () => {
  const authToken = getFromLocalStorage(authKey);
  return !!authToken;
};

export const removeUserInfo = (key) => {
  return localStorage.removeItem(key);
};

// export const getNewAccessToken = async () => {
//   return await instance({
//     url: `${getBaseUrl()}/auth/refresh-token`,
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     withCredentials: true,
//   });
// };
