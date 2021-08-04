// ACTIONS RELATED TO ROLES --------------------------------------------------
export const DISPLAY_ROLE = 'DISPLAY_ROLE';
export const displayRole = (id) => ({
  type: DISPLAY_ROLE,
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

export const REINITIALIZE_ROLES_LIST = 'REINITIALIZE_ROLES_LIST';
export const reinitializeRolesList = () => ({
  type: REINITIALIZE_ROLES_LIST,
});
