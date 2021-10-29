import {
  SAVE_INTO_VICTORY_REDUCER,
  SET_STATS,
} from 'src/actions/game';

// import { setFinalStats } from 'src/selectors/victoryFunctions';

const initialState = {
  players: [],
  winner: '',
  isGetDone: false,
  isPatchDone: false,
  finalStats: [],
};
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // case SET_STATS: {
    //   const newArray = [...state.finalStats];
    //   const newFinalStats = setFinalStats(newArray, state.winner);
    //   return {
    //     ...state,
    //     finalStats: newFinalStats,
    //   };
    // }
    case SAVE_INTO_VICTORY_REDUCER:
      return {
        ...state,
        players: action.players,
        finalStats: action.players,
        winner: action.winner,
      };
    default:
      return state;
  }
};

export default reducer;
