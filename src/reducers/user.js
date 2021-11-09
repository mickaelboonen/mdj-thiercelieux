import {
  SAVE_USER,
  END_REGISTER_PROCESS,
  SET_REGISTER_ERROR_MESSAGE,
  SAVE_USERS_LIST,
  SAVE_NEW_FRIEND,
  DELETE_FRIEND,
  SAVE_AVATAR,
  SAVE_AVATARS_LIST,
  CHANGE_USERS_INPUT_VALUE,
  CLEAR_MESSAGES,
} from 'src/actions/user';
import {
  SET_AUTH_ERROR_MESSAGE,
  LOGOUT,
} from 'src/actions/user/login';
import history from 'src/utils/history';
// TODO : change both actions below (actions/index.js)
import {
  CLEAR_INPUT,
  REINITIALIZE_DATA,
} from 'src/actions/RolesDescriptions';
import { SAVE_PLAYER_FROM_USER } from 'src/actions/gameConfiguration';
import storage from 'redux-persist/lib/storage';
import avatarPicture from 'src/assets/pictures/cards/croissant.gif';

// TEMPORARY DATA
import { gameChangedOrder } from 'src/data/gameFakeData';

const initialState = {
  pseudo: 'FakePseudo',
  id: null,
  isConnected: false,
  email: 'fakeemail@lol.com',
  token: '',
  avatar: avatarPicture,
  preferences: gameChangedOrder,
  creations: [],
  stats: [],
  errors: [],
  avatars: [],
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
    case CLEAR_MESSAGES:
      return {
        ...state,
        errors: [],
        validationMessage: '',
      };
    case SET_AUTH_ERROR_MESSAGE:
      return {
        ...state,
        errors: [action.message],
      };
    case SAVE_PLAYER_FROM_USER:
      return {
        ...state,
        usersList: [],
        usersInput: '',
      };
    case DELETE_FRIEND: {
      const newFriendsArray = state.friends.filter((friend) => friend.username !== action.friend);
      return {
        ...state,
        friends: newFriendsArray,
      };
    }
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
    case CHANGE_USERS_INPUT_VALUE:
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
        email,
        id,
        // preferences,
        creations,
        stats,
        favoriteRole,
      } = action.data;
      history.goBack();
      return {
        ...state,
        isConnected: true,
        pseudo: pseudo,
        id: id,
        token: token,
        avatar: avatar,
        // preferences: preferences,
        creations: creations,
        stats: stats,
        favoriteRole: favoriteRole,
        email: email,
        errors: [],
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
    case LOGOUT:
      storage.removeItem('persist:root');
      history.push('/');
      return {
        ...state,
        pseudo: '',
        isConnected: false,
        email: '',
        token: '',
        avatar: '',
        preferences: [],
        creations: [],
        statistics: [],
      };
    default:
      return state;
  }
};

export default reducer;
