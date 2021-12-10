export const getUser = () => {
  //to return User Informtation

  const fname = sessionStorage.getItem("fname");
  const lname = sessionStorage.getItem("lname");
  if (fname && lname) return JSON.parse(lname, fname);
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

export const setUserSession = (token, fname, lname, userId) => {
  //set user infromation in session storage

  sessionStorage.setItem("token", token);
  sessionStorage.setItem("fname", JSON.stringify(fname));
  sessionStorage.setItem("lname", JSON.stringify(lname));
  sessionStorage.setItem("userId", userId);
};

export const removeUserSession = () => {
  //To remoove the user from session storage.

  sessionStorage.removeItem("token");
  sessionStorage.removeItem("fname");
  sessionStorage.removeItem("lname");
  sessionStorage.removeItem("userId");
};
