import {
  TOGGLE_FOCUS,
  DISPLAY_RESULTS,
} from 'src/actions/roles';
import {
  REINITIALIZE_CARDS_LIST,
  FILTER_BY_PHASE,
  DISPLAY_CARD,
} from 'src/actions/cards';
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
  isFiltered: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case DISPLAY_CARD: {
      const cardToDisplay = state.cards.find((card) => card.id === action.id);
      return {
        ...state,
        cardToDisplay: cardToDisplay,
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
        isFiltered: false,
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
    case FILTER_BY_PHASE: {
      const croissantCards = [];
      const fullMoonCards = [];
      const newmoonCards = [];
      state.cards.forEach((card) => {
        if (card.phase === 'Croissant') {
          croissantCards.push(card);
        }
        else if (card.phase === 'Nouvelle Lune') {
          newmoonCards.push(card);
        }
        else {
          fullMoonCards.push(card);
        }
      });
      const filteredCards = [
        ...croissantCards,
        ...newmoonCards,
        ...fullMoonCards,
      ];
      return {
        ...state,
        cards: filteredCards,
        isFiltered: true,
      };
    }
    default:
      return state;
  }
};

export default reducer;
