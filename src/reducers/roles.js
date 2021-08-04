import {
  DISPLAY_ROLE,
  TOGGLE_FOCUS,
  DISPLAY_RESULTS,
  REINITIALIZE_ROLES_LIST,
} from 'src/actions/roles';
import {
  CHANGE_VALUE,
  CLEAR_INPUT,
} from 'src/actions';
import { hiddenRoles } from 'src/data/hiddenRoles';

const initialState = {
  roles: hiddenRoles,
  roleToDisplay: {},
  onFocus: false,
  rolesInputValue: '',
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
    case DISPLAY_RESULTS: {
      // const newArray = [];
      const newRolesArray = hiddenRoles.filter((role) => {
        if (role.name.toLowerCase().includes(action.value.toLowerCase())) {
          return role;
        }
      });

      return {
        ...state,
        roles: newRolesArray,
      };
    }
    case REINITIALIZE_ROLES_LIST:
      return {
        ...state,
        roles: hiddenRoles,
      };
    case CHANGE_VALUE:
      return {
        ...state,
        rolesInputValue: action.value,
      };
    case CLEAR_INPUT:
      return {
        ...state,
        rolesInputValue: '',
      };
    default:
      return state;
  }
};

export default reducer;
