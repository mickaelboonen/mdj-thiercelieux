// Data
import { hiddenRoles, rolesSelects } from 'src/data/hiddenRoles';
import { villagePeople, villageRolesSelects } from 'src/data/villagePeople';
import { newMoonCards, newMoonCardsSelects } from 'src/data/newMoonCards';
import { FILL_REDUCER } from '../actions/Cards';

const initialState = {
  data: [],
  flipcardData: {},
  currentPageButtons: [],
  onFocus: false,
  isFiltered: false,
  rolesInputValue: '',
  cardsInputValue: '',
  villageInputValue: '',
  loading: true,

};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // case DISPLAY_ROLE: {
    //   const roleToDisplay = state.roles.find((role) => role.id === action.id);
    //   return {
    //     ...state,
    //     roleToDisplay: roleToDisplay,
    //   };
    // }
    case FILL_REDUCER: {
      let currentData = [];
      let currentDataSelects = [];

      if (action.currentPage === 'les-roles') {
        currentData = hiddenRoles;
        currentDataSelects = rolesSelects;
      }
      else if (action.currentPage === 'les-cartes-nouvelle-lune') {
        currentData = newMoonCards;
        currentDataSelects = newMoonCardsSelects;
      }
      else if (action.currentPage === 'les-villageois') {
        currentData = villagePeople;
        currentDataSelects = villageRolesSelects;
      }
      return {
        ...state,
        data: currentData,
        currentPageButtons: currentDataSelects,
        loading: false,
      };
    }
    default:
      return state;
  }
};

export default reducer;
