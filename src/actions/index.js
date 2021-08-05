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
