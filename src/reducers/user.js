import {
  SAVE_USER,
  END_REGISTER_PROCESS,
  SET_REGISTER_ERROR_MESSAGE,
  SAVE_USERS_LIST,
  SAVE_NEW_FRIEND,
} from 'src/actions/user';
import {
  CHANGE_VALUE,
  CLEAR_INPUT,
  REINITIALIZE_DATA,
} from 'src/actions/rolesDescriptions';

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
  usersInput: '',
  usersList: [],
  friends: [
    {
      id: 2,
      username: 'Hel',
    },
    {
      id: 7,
      username: 'Quentin',
    },
    {
      id: 11,
      username: 'Chris',
    },
  ],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case REINITIALIZE_DATA:
      return {
        ...state,
        usersList: [],
      };
    case SAVE_NEW_FRIEND: {
      const newArray = state.friends;
      newArray.push(action.friend);
      return {
        ...state,
        friends: newArray,
      };
    }
    case SAVE_USERS_LIST:
      return {
        ...state,
        usersList: action.list,
      };
    case CHANGE_VALUE:
      return {
        ...state,
        usersInput: action.value,
      };
    case CLEAR_INPUT:
      return {
        ...state,
        usersInput: '',
      };
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
