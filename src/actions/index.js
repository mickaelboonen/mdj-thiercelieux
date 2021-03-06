// ACTIONS RELATED TO FIELD---------------------------------------------------
export const CHANGE_VALUE = 'CHANGE_VALUE';
export const changeValue = (value, input) => ({
  type: CHANGE_VALUE,
  value,
  input,
});

export const CLEAR_INPUT = 'CLEAR_INPUT';
export const clearInput = () => ({
  type: CLEAR_INPUT,
});

// ACTIONS RELATED TO BURGER
export const TOGGLE_BURGER = 'TOGGLE_BURGER';
export const toggleBurger = () => ({
  type: TOGGLE_BURGER,
});

export const CLOSE_BURGER = 'CLOSE_BURGER';
export const closeBurger = () => ({
  type: CLOSE_BURGER,
});

// ACTIONS RELATED TO THE HOME COMPONENT

export const DISPLAY_NEW_ROLE = 'DISPLAY_NEW_ROLE';
export const displayNewRole = (newIndexValue, id) => ({
  type: DISPLAY_NEW_ROLE,
  newIndexValue,
  id,
});

export const DISPLAY_NEW_GAME = 'DISPLAY_NEW_GAME';
export const displayNewGame = (newIndexValue, id) => ({
  type: DISPLAY_NEW_GAME,
  newIndexValue,
  id,
});

export const FETCH_HOME_DATA = 'FETCH_HOME_DATA';
export const fetchHomeData = () => ({
  type: FETCH_HOME_DATA,
});

export const SAVE_HOME_DATA = 'SAVE_HOME_DATA';
export const saveHomeData = (data, category) => ({
  type: SAVE_HOME_DATA,
  data,
  category,
});
