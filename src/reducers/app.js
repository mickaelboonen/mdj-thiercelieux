import { DISPLAY_ROLE, TOGGLE_FOCUS } from 'src/actions';
import { hiddenRoles } from 'src/data/hiddenRoles';

const initialState = {
  roles: hiddenRoles,
  roleToDisplay: {},
  onFocus: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case DISPLAY_ROLE: {
      const roleToDisplay = state.roles.find((role) => role.id === action.id);
      return {
        ...state,
        roleToDisplay: roleToDisplay,
      };
    }
    case TOGGLE_FOCUS:
      return {
        ...state,
        onFocus: !state.onFocus,
      };
    default:
      return state;
  }
};

export default reducer;
