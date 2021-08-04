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
