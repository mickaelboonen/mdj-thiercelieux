import { SAVE_USER } from 'src/actions/user';

const initialState = {
  pseudo: '',
  isConnected: false,
  token: '',
  avatar: '',
  preferences: [],
  creations: [],
  statistics: [],

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
    default:
      return state;
  }
};

export default reducer;
