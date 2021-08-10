// ACTIONS RELATED TO CARDS --------------------------------------------------
export const DISPLAY_CARD = 'DISPLAY_CARD';
export const displayCard = (id) => ({
  type: DISPLAY_CARD,
  id,
});

export const TOGGLE_FOCUS = 'TOGGLE_FOCUS';
export const toggleFocus = () => ({
  type: TOGGLE_FOCUS,
});

export const DISPLAY_RESULTS = 'DISPLAY_RESULTS';
export const displayResults = (value) => ({
  type: DISPLAY_RESULTS,
  value,
});

export const REINITIALIZE_CARDS_LIST = 'REINITIALIZE_CARDS_LIST';
export const reinitializeCardsList = () => ({
  type: REINITIALIZE_CARDS_LIST,
});

export const FILTER_BY_PHASE = 'FILTER_BY_PHASE';
export const filterByPhase = () => ({
  type: FILTER_BY_PHASE,
});
