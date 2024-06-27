import config from "../config";

export  const removeLocalStorageToken = (navigate) => {
  if (localStorage.getItem(`${config.NAME_KEY}:token`)) {
    localStorage.setItem(`${config.NAME_KEY}:token`, null);
  }
  if (navigate) {
    navigate("/");
  }
};