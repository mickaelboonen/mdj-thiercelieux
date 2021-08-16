// ACTIONS RELATED TO FIELD---------------------------------------------------
export const CHANGE_VALUE = 'CHANGE_VALUE';
export const changeValue = (value, input) => ({
  type: CHANGE_VALUE,
  value,
  input,
});

export const CLEAR_INPUT = 'CLEAR_INPUT';
export const clearInput = (input) => ({
  type: CLEAR_INPUT,
  input,
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

// ACTIONS RELATED TO THE CHARACTERS COMPONENT

export const FETCH_RANDOM_ROLES = 'FETCH_RANDOM_ROLES';
export const fetchRandomRoles = () => ({
  type: FETCH_RANDOM_ROLES,
});

export const DISPLAY_NEW_ROLE = 'DISPLAY_NEW_ROLE';
export const displayNewRole = (newIndexValue, id) => ({
  type: DISPLAY_NEW_ROLE,
  newIndexValue,
  id,
});
