import { SAVE_PLAYERS_FINAL_ARRAY } from 'src/actions/game';

const initialState = {
  players: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_PLAYERS_FINAL_ARRAY:
      return {
        ...state,
        players: action.array,
      };
    default:
      return state;
  }
};

export default reducer;
