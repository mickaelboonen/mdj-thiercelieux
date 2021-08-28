import {
  SAVE_USER,
  END_REGISTER_PROCESS,
  SET_REGISTER_ERROR_MESSAGE,
  SAVE_AVATAR,
  SAVE_AVATARS_LIST,
} from 'src/actions/user';

import avatarPicture from 'src/assets/pictures/cards/croissant.gif';

const initialState = {
  pseudo: 'FakePseudo',
  isConnected: false,
  email: 'fakeemail@lol.com',
  token: '',
  avatar: avatarPicture,
  preferences: [],
  creations: [],
  statistics: [],
  errors: [],
  avatars: [],
  validationMessage: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_USER: {
      const {
        pseudo,
        token,
        avatar,
        email,
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
        email: email,
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
    case SAVE_AVATAR: {
      return {
        ...state,
        avatar: action.avatar,
      };
    }
    case SAVE_AVATARS_LIST:
      return {
        ...state,
        avatars: action.avatars,
      };
    default:
      return state;
  }
};

export default reducer;
