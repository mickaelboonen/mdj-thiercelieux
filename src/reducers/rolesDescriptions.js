/* eslint-disable no-lonely-if */
// DATA
import { hiddenRoles, rolesSelects } from 'src/data/hiddenRoles';
import { villagePeople, villageRolesSelects } from 'src/data/villagePeople';
import { newMoonCards, newMoonCardsSelects } from 'src/data/newMoonCards';

// ACTIONS
import {
  CHANGE_VALUE,
  CLEAR_INPUT,
  FILL_REDUCER,
  FILTER_BY,
  DISPLAY_ROLE,
  TOGGLE_FOCUS,
  DISPLAY_RESULTS,
  REINITIALIZE_DATA,
  DISPLAY_CARD,
} from 'src/actions/Cards';

// SELECTORS
import {
  sortBy,
  filterByPower,
  filterBySide,
  filterByPhase,
} from 'src/selectors/sortingFunctions';
import { selectData } from 'src/selectors/selectData';

const initialState = {
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
      else {
        // VILLAGE PEOPLE
        if (action.value !== '' && state.villageRolesPage) {
          newArray = filterByPower(action.value, villagePeople);
        }
        else if (action.value === '' && action.filter === 'power-select') {
          newArray = villagePeople;
        }

        // HIDDEN ROLES
        else if (action.value !== '' && state.hiddenRolesPage) {
          newArray = filterBySide(action.value, hiddenRoles);
        }
        else if (action.value === '' && action.filter === 'side-select') {
          newArray = hiddenRoles;
        }
        // NEW MOON CARDS
        else if (action.value !== '' && state.newMoonCardsPage) {
          newArray = filterByPhase(action.value, newMoonCards);
        }
        else if (action.value === '' && action.filter === 'phase-select') {
          newArray = newMoonCards;
        }
      }
      return {
        ...state,
        data: newArray,
      };
    }
    case CHANGE_VALUE:
      return {
        ...state,
        rolesInput: action.value,
      };
    case CLEAR_INPUT:
      return {
        ...state,
        rolesInput: '',
      };
    case FILL_REDUCER: {
      let currentData = [];
      let currentDataSelects = [];
      let currentPage = null;
      let wrongPage = null;
      let wrongPage2 = null;

      if (action.currentPage === 'les-roles') {
        currentData = hiddenRoles;
        currentDataSelects = rolesSelects;
        currentPage = 'hiddenRolesPage';
        wrongPage = 'newMoonCardsPage';
        wrongPage2 = 'villageRolesPage';
      }
      else if (action.currentPage === 'les-cartes-nouvelle-lune') {
        currentData = newMoonCards;
        currentDataSelects = newMoonCardsSelects;
        currentPage = 'newMoonCardsPage';
        wrongPage = 'hiddenRolesPage';
        wrongPage2 = 'villageRolesPage';
      }
      else if (action.currentPage === 'les-villageois') {
        currentData = villagePeople;
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
