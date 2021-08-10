import {
  DISPLAY_ROLE,
  TOGGLE_FOCUS,
  DISPLAY_RESULTS,
} from 'src/actions/roles';
import { REINITIALIZE_CARDS_LIST } from 'src/actions/cards';
import {
  CHANGE_VALUE,
  CLEAR_INPUT,
} from 'src/actions';
import { newMoonCards } from 'src/data/newMoonCards';

const initialState = {
  cards: newMoonCards,
  cardToDisplay: {},
  onFocus: false,
  cardsInputValue: '',
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
      const newCardsArray = newMoonCards.filter((card) => {
        if (card.name.toLowerCase().includes(action.value.toLowerCase())) {
          return card;
        }
      });

      return {
        ...state,
        cards: newCardsArray,
      };
    }
    case REINITIALIZE_CARDS_LIST:
      return {
        ...state,
        cards: newMoonCards,
      };
    case CHANGE_VALUE:
      return {
        ...state,
        cardsInputValue: action.value,
      };
    case CLEAR_INPUT:
      return {
        ...state,
        cardsInputValue: '',
      };
    default:
      return state;
  }
};

export default reducer;
