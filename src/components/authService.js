const doLogin = (username) => {
  localStorage.setItem("username", username);
  localStorage.setItem("isLoggedIn", true);
};

const isLoggedIn = () => {
  return Boolean(localStorage.getItem("isLoggedIn"));
};

const getUserName = () => {
  return localStorage.getItem("username");
};

export default {
  doLogin,
  isLoggedIn,
  getUserName
};
