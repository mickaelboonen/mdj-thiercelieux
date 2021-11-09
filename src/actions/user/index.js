export const CHECK_AUTH = 'CHECK_AUTH';
export const checkAuth = (data) => ({
  type: CHECK_AUTH,
  data,
});

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

export const DELETE_FRIEND = 'DELETE_FRIEND';
export const deleteFriend = (friend) => ({
  type: DELETE_FRIEND,
  friend,
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

export const FETCH_AVATARS = 'FETCH_AVATARS';
export const fetchAvatars = () => ({
  type: FETCH_AVATARS,
});

export const SAVE_AVATARS_LIST = 'SAVE_AVATARS_LIST';
export const saveAvatarsList = (avatars) => ({
  type: SAVE_AVATARS_LIST,
  avatars,
});

export const CHANGE_USERS_INPUT_VALUE = 'CHANGE_USERS_INPUT_VALUE';
export const changeUsersInputValue = (value) => ({
  type: CHANGE_USERS_INPUT_VALUE,
  value,
});

export const CLEAR_MESSAGES = 'CLEAR_MESSAGES';
export const clearMessages = () => ({
  type: CLEAR_MESSAGES,
});

export const FETCH_STATS_FOR_PROFILE = 'FETCH_STATS_FOR_PROFILE';
export const fetchStatsForProfile = () => ({
  type: FETCH_STATS_FOR_PROFILE,
});

export const SAVE_CURRENT_USER_STATS = 'SAVE_CURRENT_USER_STATS';
export const saveCurrentUserStats = (stats) => ({
  type: SAVE_CURRENT_USER_STATS,
  stats,
});
