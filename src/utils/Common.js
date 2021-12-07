export const getUser = () => {
  //to return User Informtation

  const userStr = sessionStorage.getItem("user");
  if (userStr) return JSON.parse(userStr);
  else return null;
};

export const getUserId = () => {
  //to return User Informtation

  const userStr = sessionStorage.getItem("userId");
  if (userStr) return JSON.parse(userStr);
  else return null;
};

export const getToken = () => {
  //to return Token

  return sessionStorage.getItem("token") || null;
};

export const setUserSession = (token, user, userId) => {
  //set user infromation in session storage

  sessionStorage.setItem("token", token);
  sessionStorage.setItem("user", JSON.stringify(user));
  sessionStorage.setItem("userId", userId);
};

export const removeUserSession = () => {
  //To remoove the user from session storage.

  sessionStorage.removeItem("token");
  sessionStorage.removeItem("user");
  sessionStorage.removeItem("userId");
};
