/* eslint-disable no-lonely-if */
import {
  DISPLAY_ROLE,
  TOGGLE_FOCUS,
  DISPLAY_RESULTS,
} from 'src/actions/roles';
import {
  REINITIALIZE_VILLAGE_ROLES_LIST,
} from 'src/actions/Cards/villageActions';
import {
  CHANGE_VALUE,
  CLEAR_INPUT,
} from 'src/actions';
import { villagePeople } from 'src/data/villagePeople';
import { FILTER_BY } from 'src/actions/Cards/index';

// SELECTORS
import { sortBy, filterByPower } from 'src/selectors/sortingFunctions';

const initialState = {
  villageRoles: villagePeople,
  roleToDisplay: {},
  onFocus: false,
  villageInputValue: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FILTER_BY: {
      let newArray = [];
      if (action.filter === 'sorting-select') {
        newArray = sortBy(action.value, state.villageRoles);
      }
      else {
        if (action.value !== '') {
          newArray = filterByPower(action.value, villagePeople);
        }
        else {
          newArray = villagePeople;
        }
      }
      return {
        ...state,
        villageRoles: newArray,
      };
    }
    case DISPLAY_ROLE: {
      const roleToDisplay = state.villageRoles.find((role) => role.id === action.id);
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
      const newRolesArray = villagePeople.filter((role) => {
        if (role.name.toLowerCase().includes(action.value.toLowerCase())) {
          return role;
        }
      });

      return {
        ...state,
        villageRoles: newRolesArray,
      };
    }
    case REINITIALIZE_VILLAGE_ROLES_LIST:
      return {
        ...state,
        villageRoles: villagePeople,
      };
    case CHANGE_VALUE:
      return {
        ...state,
        villageInputValue: action.value,
      };
    case CLEAR_INPUT:
      return {
        ...state,
        villageInputValue: '',
      };
    default:
      return state;
  }
};

export default reducer;