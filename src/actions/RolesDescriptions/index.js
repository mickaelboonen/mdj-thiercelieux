export const FILTER_BY = 'FILTER_BY';
export const filterBy = (value, filter) => ({
  type: FILTER_BY,
  value,
  filter,
});

export const FILL_REDUCER = 'FILL_REDUCER';
export const fillReducer = (currentPage) => ({
  type: FILL_REDUCER,
  currentPage,
});

export const CHANGE_VALUE = 'CHANGE_VALUE';
export const changeValue = (value) => ({
  type: CHANGE_VALUE,
  value,
});

export const CLEAR_INPUT = 'CLEAR_INPUT';
export const clearInput = () => ({
  type: CLEAR_INPUT,
});

export const DISPLAY_RESULTS = 'DISPLAY_RESULTS';
export const displayResults = (value) => ({
  type: DISPLAY_RESULTS,
  value,
});

export const DISPLAY_ROLE = 'DISPLAY_ROLE';
export const displayRole = (id) => ({
  type: DISPLAY_ROLE,
  id,
});

export const TOGGLE_FOCUS = 'TOGGLE_FOCUS';
export const toggleFocus = () => ({
  type: TOGGLE_FOCUS,
});

export const REINITIALIZE_DATA = 'REINITIALIZE_DATA';
export const reinitializeData = () => ({
  type: REINITIALIZE_DATA,
});

export const DISPLAY_CARD = 'DISPLAY_CARD';
export const displayCard = (id) => ({
  type: DISPLAY_CARD,
  id,
});