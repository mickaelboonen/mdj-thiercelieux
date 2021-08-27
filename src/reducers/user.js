import {
  SAVE_USER,
  END_REGISTER_PROCESS,
  SET_REGISTER_ERROR_MESSAGE,
} from 'src/actions/user';

const initialState = {
  pseudo: '',
  isConnected: false,
  token: '',
  avatar: '',
  preferences: [],
  creations: [],
  statistics: [],
  errors: [],
  validationMessage: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_USER: {
      const {
        pseudo,
        token,
        avatar,
        preferences,
        creations,
        statistics,
        favoriteRole,
      } = action.data;
      return {
        ...state,
        isConnected: true,
        pseudo: pseudo,
        token: token,
        avatar: avatar,
        preferences: preferences,
        creations: creations,
        statistics: statistics,
        favoriteRole: favoriteRole,
      };
    }
    case END_REGISTER_PROCESS:
      return {
        ...state,
        validationMessage: action.message,
      };
    case SET_REGISTER_ERROR_MESSAGE: {
      // TODO GERER TOUTES LES ERREURS COMME DES OBJETS
      // POUR MATCH LE HOOK
      return {
        ...state,
        errors: action.messages,
      };
    }
    default:
      return state;
  }
};

export default reducer;
