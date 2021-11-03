/* eslint-disable no-lonely-if */
// DATA
// TODO : to be changed
import { rolesSelects, villageRolesSelects, newMoonCardsSelects } from 'src/data/selectsCardsData';

// ACTIONS
import {
  CLEAR_INPUT,
  SAVE_CARDS,
  DISPLAY_ROLE,
  TOGGLE_FOCUS,
  REINITIALIZE_DATA,
  DISPLAY_CARD,
  CHANGE_ROLES_INPUT_VALUE,
  APPLY_FILTER,
} from 'src/actions/RolesDescriptions';

const initialState = {
  randomData: [],
  data: [],
  flipcardData: {},
  currentPageButtons: [],
  onFocus: false,
  isFiltered: false,
  rolesInput: '',
  filter: '',
  sort: '',
  loading: true,
  hiddenRolesPage: false,
  villageRolesPage: false,
  newMoonCardsPage: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case REINITIALIZE_DATA: {
      // TODO
      // const resetData = selectData(state);
      return {
        ...state,
        data: state.data,
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

    case APPLY_FILTER: {
      let currentSelect = '';
      if (action.id === 'sorting-select') {
        currentSelect = 'sort';
      }
      else {
        currentSelect = 'filter';
      }
      return {
        ...state,
        [currentSelect]: action.filter,
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
