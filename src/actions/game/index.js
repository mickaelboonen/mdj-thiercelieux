export const SET_GAME = 'SET_GAME';
export const setGame = () => ({
  type: SET_GAME,
});

export const SAVE_PLAYERS_FINAL_ARRAY = 'SAVE_PLAYERS_FINAL_ARRAY';
export const savePlayersFinalArray = (array) => ({
  type: SAVE_PLAYERS_FINAL_ARRAY,
  array,
});

export const DISPLAY_PLAYER = 'DISPLAY_PLAYER';
export const displayPlayer = (id) => ({
  type: DISPLAY_PLAYER,
  id,
});

export const RESET_PLAYER_TO_DISPLAY = 'RESET_PLAYER_TO_DISPLAY';
export const resetPlayerToDisplay = (id) => ({
  type: RESET_PLAYER_TO_DISPLAY,
  id,
});

export const KILL_BY_VOTE = 'KILL_BY_VOTE';
export const killByVote = (name) => ({
  type: KILL_BY_VOTE,
  name,
});

export const SET_NEXT_ROLE_TO_PLAY = 'SET_NEXT_ROLE_TO_PLAY';
export const setNextRoleToPlay = (currentName) => ({
  type: SET_NEXT_ROLE_TO_PLAY,
  currentName,
});

export const CHANGE_PLAYERS_ATTRIBUTES = 'CHANGE_PLAYERS_ATTRIBUTES';
export const changePlayersAttributes = (currentRole, victim) => ({
  type: CHANGE_PLAYERS_ATTRIBUTES,
  currentRole,
  victim,
});
