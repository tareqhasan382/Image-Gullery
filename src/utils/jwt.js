import jwtDecode from "jwt-decode";
export const decodedToken = (token) => {
  const data = jwtDecode(token);
  return data;
};
