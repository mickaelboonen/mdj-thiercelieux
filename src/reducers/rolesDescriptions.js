/* eslint-disable no-lonely-if */
// DATA
import { hiddenRoles, rolesSelects } from 'src/data/hiddenRoles';
import { villagePeople, villageRolesSelects } from 'src/data/villagePeople';
import { newMoonCardsSelects } from 'src/data/newMoonCards';

// ACTIONS
import {
  CLEAR_INPUT,
  SAVE_CARDS,
  FILTER_BY,
  DISPLAY_ROLE,
  TOGGLE_FOCUS,
  DISPLAY_RESULTS,
  REINITIALIZE_DATA,
  DISPLAY_CARD,
  CHANGE_ROLES_INPUT_VALUE,
} from 'src/actions/RolesDescriptions';

// SELECTORS
import {
  sortBy,
  filterByPower,
  filterBySide,
  filterByPhase,
} from 'src/selectors/sortingFunctions';
import { selectData } from 'src/selectors/selectData';

const initialState = {
  randomData: [],
  data: [],
  flipcardData: {},
  currentPageButtons: [],
  onFocus: false,
  isFiltered: false,
  rolesInput: '',
  loading: true,
  hiddenRolesPage: false,
  villageRolesPage: false,
  newMoonCardsPage: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case REINITIALIZE_DATA: {
      const resetData = selectData(state);
      return {
        ...state,
        data: resetData,
      };
    }
    case DISPLAY_ROLE: {
      const roleToDisplay = state.data.find((role) => role.id === action.id);
      return {
        ...state,
        flipcardData: roleToDisplay,
      };
    }
    case DISPLAY_CARD: {
      const roleToDisplay = state.data.find((role) => role.id === action.id);
      return {
        ...state,
        flipcardData: roleToDisplay,
      };
    }
    case TOGGLE_FOCUS:
      return {
        ...state,
        onFocus: !state.onFocus,
      };
    case DISPLAY_RESULTS: {
      const currentData = selectData(state);
      const newRolesArray = currentData.filter((role) => {
        if (role.name.toLowerCase().includes(action.value.toLowerCase())) {
          return role;
        }
      });

      return {
        ...state,
        data: newRolesArray,
      };
    }
    case FILTER_BY: {
      let newArray = [];
      if (action.filter === 'sorting-select') {
        newArray = sortBy(action.value, state.data);
      }
      // TODO : fix bug on selects
      else {
        // VILLAGE PEOPLE
        if (action.value !== '' && state.villageRolesPage) {
          newArray = filterByPower(action.value, state.data);
        }
        else if (action.value === '' && action.filter === 'power-select') {
          newArray = villagePeople;
        }

        // HIDDEN ROLES
        else if (action.value !== '' && state.hiddenRolesPage) {
          newArray = filterBySide(action.value, state.data);
        }
        else if (action.value === '' && action.filter === 'side-select') {
          newArray = hiddenRoles;
        }
        // NEW MOON CARDS
        else if (action.value !== '' && state.newMoonCardsPage) {
          newArray = filterByPhase(action.value, state.data);
        }
        else if (action.value === '' && action.filter === 'phase-select') {
          newArray = state.data;
        }
      }
      return {
        ...state,
        data: newArray,
      };
    }
    case CHANGE_ROLES_INPUT_VALUE:
      return {
        ...state,
        rolesInput: action.value,
      };
    case CLEAR_INPUT:
      return {
        ...state,
        rolesInput: '',
      };
    case SAVE_CARDS: {
      const currentData = action.data;
      let currentDataSelects = [];
      let currentPage = null;
      let wrongPage = null;
      let wrongPage2 = null;

      if (action.currentPage === 'roles') {
        currentDataSelects = rolesSelects;
        currentPage = 'hiddenRolesPage';
        wrongPage = 'newMoonCardsPage';
        wrongPage2 = 'villageRolesPage';
      }
      else if (action.currentPage === 'newmoon') {
        currentDataSelects = newMoonCardsSelects;
        currentPage = 'newMoonCardsPage';
        wrongPage = 'hiddenRolesPage';
        wrongPage2 = 'villageRolesPage';
      }
      else if (action.currentPage === 'village') {
        currentDataSelects = villageRolesSelects;
        currentPage = 'villageRolesPage';
        wrongPage = 'hiddenRolesPage';
        wrongPage2 = 'newMoonCardsPage';
      }
      return {
        ...state,
        data: currentData,
        currentPageButtons: currentDataSelects,
        loading: false,
        onFocus: false,
        isFiltered: false,
        [currentPage]: true,
        [wrongPage]: false,
        [wrongPage2]: false,
        rolesInput: '',
        flipcardData: {},
      };
    }
    default:
      return state;
  }
};

export default reducer;
