export const getJwtToken = () => {
  const token = localStorage.getItem("user");
  const jwtToken = JSON.parse(token);
  return jwtToken?.jwt;
};
