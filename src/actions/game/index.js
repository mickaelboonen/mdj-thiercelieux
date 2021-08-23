export const SET_GAME = 'SET_GAME';
export const setGame = () => ({
  type: SET_GAME,
});

export const SAVE_PLAYERS_FINAL_ARRAY = 'SAVE_PLAYERS_FINAL_ARRAY';
export const savePlayersFinalArray = (array) => ({
  type: SAVE_PLAYERS_FINAL_ARRAY,
  array,
});
