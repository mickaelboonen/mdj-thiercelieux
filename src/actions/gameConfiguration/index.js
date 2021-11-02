export const SELECT_NEWMOON = 'SELECT_NEWMOON';
export const selectNewmoon = () => ({
  type: SELECT_NEWMOON,
});

export const SET_PLAYERS_NUMBER = 'SET_PLAYERS_NUMBER';
export const setPlayersNumber = (value) => ({
  type: SET_PLAYERS_NUMBER,
  value,
});

export const SET_GAMES = 'SET_GAMES';
export const setGames = (value) => ({
  type: SET_GAMES,
  value,
});

export const SET_GAME_ORDER = 'SET_GAME_ORDER';
export const setGameOrder = (value) => ({
  type: SET_GAME_ORDER,
  value,
});

export const SET_NEWMOON_CARDS = 'SET_NEWMOON_CARDS';
export const setNewmoonCards = (value) => ({
  type: SET_NEWMOON_CARDS,
  value,
});

export const SET_ROLES_ATTRIBUTION = 'SET_ROLES_ATTRIBUTION';
export const setRolesAttribution = (value) => ({
  type: SET_ROLES_ATTRIBUTION,
  value,
});

export const ADD_NEW_PLAYER = 'ADD_NEW_PLAYER';
export const addNewPlayer = () => ({
  type: ADD_NEW_PLAYER,
});

export const SAVE_SELECT_CHANGE = 'SAVE_SELECT_CHANGE';
export const saveSelectChange = (value, select) => ({
  type: SAVE_SELECT_CHANGE,
  value,
  select,
});

export const SAVE_PLAYER = 'SAVE_PLAYER';
export const savePlayer = () => ({
  type: SAVE_PLAYER,
});

export const SAVE_ROLE_ACTION = 'SAVE_ROLE_ACTION';
export const saveRoleAction = (number, id, name, checked) => ({
  type: SAVE_ROLE_ACTION,
  number,
  id,
  name,
  checked,
});

export const SAVE_ROLES_RANDOMLY = 'SAVE_ROLES_RANDOMLY';
export const setRolesRandomly = () => ({
  type: SAVE_ROLES_RANDOMLY,
});

export const SAVE_PLAYER_FROM_USER = 'SAVE_PLAYER_FROM_USER';
export const savePlayerFromUsers = (username, id) => ({
  type: SAVE_PLAYER_FROM_USER,
  username,
  id,
});

export const CHANGE_PSEUDO_INPUT_VALUE = 'CHANGE_PSEUDO_INPUT_VALUE';
export const changePseudoInputValue = (value) => ({
  type: CHANGE_PSEUDO_INPUT_VALUE,
  value,
});

export const CHECK_FOR_THIEF = 'CHECK_FOR_THIEF';
export const checkForThief = () => ({
  type: CHECK_FOR_THIEF,
});

export const GO_BACK_TO_PLAYERS_LIST = 'GO_BACK_TO_PLAYERS_LIST';
export const goBackToPlayersList = () => ({
  type: GO_BACK_TO_PLAYERS_LIST,
});

export const DELETE_PLAYER = 'DELETE_PLAYER';
export const deletePlayer = (name) => ({
  type: DELETE_PLAYER,
  name,
});

export const SET_CONFIG_ERROR_MESSAGE = 'SET_CONFIG_ERROR_MESSAGE';
export const setConfigErrorMessage = (error) => ({
  type: SET_CONFIG_ERROR_MESSAGE,
  error,
});

export const APPLY_SELECTED_CONFIGURATION = 'APPLY_SELECTED_CONFIGURATION';
export const applySelectedConfiguration = (config) => ({
  type: APPLY_SELECTED_CONFIGURATION,
  config,
});

