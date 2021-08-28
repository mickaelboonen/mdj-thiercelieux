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

export const FETCH_USERS = 'FETCH_USERS';
export const fetchUsers = (value) => ({
  type: FETCH_USERS,
  value,
});

export const SAVE_USERS_LIST = 'SAVE_USERS_LIST';
export const saveUsersList = (list) => ({
  type: SAVE_USERS_LIST,
  list,
});

export const ADD_NEW_FRIEND = 'ADD_NEW_FRIEND';
export const addNewFriend = (name) => ({
  type: ADD_NEW_FRIEND,
  name,
});

export const SAVE_NEW_FRIEND = 'SAVE_NEW_FRIEND';
export const saveNewFriend = (friend) => ({
  type: SAVE_NEW_FRIEND,
  friend,
});

