const LS_TOKEN_KEY = "token";

export function setToken(token) {
  window.localStorage.setItem(LS_TOKEN_KEY, token);
}

function getToken() {
  return localStorage.getItem(LS_TOKEN_KEY);
}

export function isValidToken() {
  try {
    const token = getToken();
    const userData = token.split(".")[1];
    const payload = JSON.parse(atob(userData));
    const currentTime = Date.now();

    return payload.exp > currentTime / 1000;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export function destroyToken() {
  localStorage.removeItem(LS_TOKEN_KEY);

  // TODO: Invalidate token
}
