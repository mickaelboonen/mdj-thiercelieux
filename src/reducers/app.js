import { expansions } from 'src/data/expansions';
import {
  CLOSE_BURGER,
  FETCH_RANDOM_ROLES,
  TOGGLE_BURGER,
  DISPLAY_NEW_ROLE,
  DISPLAY_NEW_GAME,
  SAVE_HOME_DATA,
} from 'src/actions';
import { LOGOUT } from 'src/actions/user/login';
import { generateRandomNumbersArray } from 'src/selectors/generateRandomNumber';

const initialState = {
  isBurgerOpen: false,
  expansions: expansions,
  loading: true,
  randomRoles: [],
  roleToDisplay: {},
  gameToDisplay: expansions[0],
  hiddenRoles: [],
  games: [],

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
    case SAVE_HOME_DATA: {
      let rolesToDisplay = state.randomRoles;
      let { roleToDisplay } = state;

      if (action.category === 'hiddenRoles') {
        const idArray = [];

        /**
         * returns Array of numbers
         */
        generateRandomNumbersArray(idArray, 7, 32);

        rolesToDisplay = [];

        /**
         * Pushes into rolesToDisplay the roles whose ids match the numbers in the idArray
         */
        action.data.forEach((role) => {
          if (idArray.indexOf(role.id) >= 0) {
            rolesToDisplay.push(role);
          }
        });

        [roleToDisplay] = rolesToDisplay;
      }
      return {
        ...state,
        randomRoles: rolesToDisplay,
        roleToDisplay: roleToDisplay,
        [action.category]: action.data,
      };
    }
    case LOGOUT:
      return {
        ...state,
        isBurgerOpen: false,
      };
    default:
      return state;
  }
};

export default reducer;
