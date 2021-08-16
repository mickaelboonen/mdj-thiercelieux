import { expansions } from 'src/data/expansions';
import { hiddenRoles } from 'src/data/hiddenRoles';
import {
  CLOSE_BURGER,
  FETCH_RANDOM_ROLES,
  TOGGLE_BURGER,
  DISPLAY_NEW_ROLE,
  DISPLAY_NEW_GAME,
} from 'src/actions';

import { generateRandomNumber } from 'src/selectors/generateRandomNumber';

const initialState = {
  isBurgerOpen: false,
  expansions: expansions,
  loading: true,
  randomRoles: [],
  roleToDisplay: {},
  gameToDisplay: expansions[0],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CLOSE_BURGER:
      return {
        ...state,
        isBurgerOpen: false,
      };
    case TOGGLE_BURGER:
      return {
        ...state,
        isBurgerOpen: !state.isBurgerOpen,
      };
    case DISPLAY_NEW_GAME: {
      const idArray = state.expansions.map((role) => role.id);
      const currentIndex = idArray.indexOf(action.id);
      let newIndex = currentIndex + action.newIndexValue;

      if (newIndex > state.expansions.length - 1) {
        newIndex = 0;
      }
      else if (newIndex < 0) {
        newIndex = state.expansions.length - 1;
      }
      return {
        ...state,
        gameToDisplay: state.expansions[newIndex],
      };
    }
    case DISPLAY_NEW_ROLE: {
      const idArray = state.randomRoles.map((role) => role.id);
      const currentIndex = idArray.indexOf(action.id);
      let newIndex = currentIndex + action.newIndexValue;

      if (newIndex > state.randomRoles.length - 1) {
        newIndex = 0;
      }
      else if (newIndex < 0) {
        newIndex = state.randomRoles.length - 1;
      }
      return {
        ...state,
        roleToDisplay: state.randomRoles[newIndex],
      };
    }
    case FETCH_RANDOM_ROLES: {
      const idArray = [];

      /**
       * returns Array of numbers
       */
      generateRandomNumber(idArray);

      const rolesToDisplay = [];

      /**
       * Pushes into rolesToDisplay the roles whose ids match the numbers in the idArray
       */
      hiddenRoles.forEach((role) => {
        if (idArray.indexOf(role.id) >= 0) {
          rolesToDisplay.push(role);
        }
      });
      return {
        ...state,
        randomRoles: rolesToDisplay,
        roleToDisplay: rolesToDisplay[3],
      };
    }
    default:
      return state;
  }
};

export default reducer;
