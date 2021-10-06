export const SET_AUTH_ERROR_MESSAGE = 'SET_AUTH_ERROR_MESSAGE';
export const setAuthErrorMessage = (message) => ({
  type: SET_AUTH_ERROR_MESSAGE,
  message,
});


export const LOGOUT = 'LOGOUT';
export const logout = () => ({
  type: LOGOUT,
});
