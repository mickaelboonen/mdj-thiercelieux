import {
  SET_GAMES,
  SET_GAME_ORDER,
  SET_NEWMOON_CARDS,
  SET_PLAYERS_NUMBER,
  SET_ROLES_ATTRIBUTION,
} from 'src/actions/gameConfiguration';

const initialState = {
  configuration: {
    playersNumber: 8,
    games: [],
    gameOrder: [], // si classic, on injecte le tableau classic sinon les prefs
    newmoonCards: [], // si classic, on injecte le tableau classic sinon les prefs
    rolesAttribution: 'manual',
  },
  errorMessage: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_PLAYERS_NUMBER: {
      const message = [];
      const newConfigurationObject = state.configuration;
      if (action.value > 15) {
        message.push('Le nombre de joueurs ne peut excéder 15.');
      }
      else if (action.value < 8) {
        message.push('Il faut minimum 8 joueurs pour pouvoir jouer.');
      }
      else {
        newConfigurationObject.playersNumber = action.value;
      }

      return {
        ...state,
        configuration: newConfigurationObject,
        errorMessage: message,
      };
    }
    case SET_GAMES: {
      const newConfigurationObject = state.configuration;
      if (newConfigurationObject.games.indexOf(action.value) >= 0) {
        const newArray = newConfigurationObject.games.filter((game) => action.value !== game);
        newConfigurationObject.games = newArray;
      }
      else {
        newConfigurationObject.games.push(action.value);
      }
      return {
        ...state,
        configuration: newConfigurationObject,
      };
    }
    case SET_GAME_ORDER: {
      const newConfigurationObject = state.configuration;
      if (action.value === 'classic') {
        newConfigurationObject.gameOrder = []; // inclure ici le tableau d'ordre classique
      }
      else {
        newConfigurationObject.gameOrder = []; // inclure ici le tableau d'ordre
      }
      return {
        ...state,
        configuration: newConfigurationObject,
      };
    }
    case SET_NEWMOON_CARDS: {
      const newConfigurationObject = state.configuration;

      if (action.value === 'classic') {
        newConfigurationObject.newmoonCards = []; // inclure ici le tableau d'ordre classique
      }
      else {
        newConfigurationObject.newmoonCards = []; // inclure ici le tableau d'ordre
      }
      return {
        ...state,
        configuration: newConfigurationObject,
      };
    }
    case SET_ROLES_ATTRIBUTION: {
      const newConfigurationObject = state.configuration;
      newConfigurationObject.rolesAttribution = action.value;
      return {
        ...state,
        configuration: newConfigurationObject,
      };
    }
    default:
      return state;
  }
};

export default reducer;
