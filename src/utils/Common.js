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

  return sessionStorage.getItem("token");
};

export const setUserSession = (
  token,
  fname,
  lname,
  userId,
  email,
  mobile,
  role,
  picture,
  vendor_id
) => {
  //set user infromation in session storage
  sessionStorage.setItem("token", token);
  sessionStorage.setItem("fname", JSON.stringify(fname));
  sessionStorage.setItem("lname", JSON.stringify(lname));
  sessionStorage.setItem("userId", userId);
  sessionStorage.setItem("email", email);
  sessionStorage.setItem("mobile", mobile);
  sessionStorage.setItem("userrole", JSON.stringify(role));
  sessionStorage.setItem("image", picture);
  sessionStorage.setItem("storeid", vendor_id);
};

export const removeUserSession = () => {
  //To remoove the user from session storage.

  sessionStorage.removeItem("token");
  sessionStorage.removeItem("fname");
  sessionStorage.removeItem("lname");
  sessionStorage.removeItem("userId");
};

export const getLat = () => {
  const lat = sessionStorage.getItem("lat");

  if (lat) {
    return JSON.parse(lat);
  } else return null;
};

export const getLng = () => {
  const lng = sessionStorage.getItem("lng");

  if (lng) {
    return JSON.parse(lng);
  } else return null;
};

export const setLatLong = (lat, lng) => {
  sessionStorage.setItem("lat", lat);
  sessionStorage.setItem("lng", lng);
};
