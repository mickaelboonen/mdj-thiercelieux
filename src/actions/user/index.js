export const LOGIN = 'LOGIN';
export const login = (data) => ({
  type: LOGIN,
  data,
});

export const SAVE_USER = 'SAVE_USER';
export const saveUser = (data) => ({
  type: SAVE_USER,
  data,
});

export const SAVE_NEW_USER = 'SAVE_NEW_USER';
export const saveNewUser = (data) => ({
  type: SAVE_NEW_USER,
  data,
});

export const END_REGISTER_PROCESS = 'END_REGISTER_PROCESS';
export const endRegisterProcess = (message) => ({
  type: END_REGISTER_PROCESS,
  message,
});

export const SET_REGISTER_ERROR_MESSAGE = 'SET_REGISTER_ERROR_MESSAGE';
export const setRegisterErrorMessage = (messages) => ({
  type: SET_REGISTER_ERROR_MESSAGE,
  messages,
});

export const CHANGE_AVATAR = 'CHANGE_AVATAR';
export const changeAvatar = (name) => ({
  type: CHANGE_AVATAR,
  name,
});

export const SAVE_AVATAR = 'SAVE_AVATAR';
export const saveAvatar = (avatar) => ({
  type: SAVE_AVATAR,
  avatar,
});

export const SAVE_PSEUDO_IN_STATE = 'SAVE_PSEUDO_IN_STATE';
export const savePseudoInState = (value) => ({
  type: SAVE_PSEUDO_IN_STATE,
  value,
});

export const SAVE_EMAIL_IN_STATE = 'SAVE_EMAIL_IN_STATE';
export const saveEmailInState = (value) => ({
  type: SAVE_EMAIL_IN_STATE,
  value,
});
