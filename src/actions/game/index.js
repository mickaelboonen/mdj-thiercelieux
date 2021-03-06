export const SET_GAME = 'SET_GAME';
export const setGame = () => ({
  type: SET_GAME,
});

export const SET_DAY = 'SET_DAY';
export const setDay = () => ({
  type: SET_DAY,
});

export const SET_NIGHT = 'SET_NIGHT';
export const setNight = () => ({
  type: SET_NIGHT,
});

export const SAVE_GAME_ARRAYS = 'SAVE_GAME_ARRAYS';
export const saveGameaArrays = (players, instructions, thiefRoles = []) => ({
  type: SAVE_GAME_ARRAYS,
  players,
  instructions,
  thiefRoles,
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
//--------------------------------------------------------------------------------------------------
export const CHANGE_PLAYERS_ATTRIBUTES = 'CHANGE_PLAYERS_ATTRIBUTES';
export const changePlayersAttributes = () => ({
  type: CHANGE_PLAYERS_ATTRIBUTES,
});

export const SET_CHANGES = 'SET_CHANGES';
export const setChanges = (changes) => ({
  type: SET_CHANGES,
  changes,
});

export const KILL_PLAYER = 'KILL_PLAYER';
export const killPlayer = (victim) => ({
  type: KILL_PLAYER,
  victim,
});

//-------------------------------------------------

export const PREPARE_FOR_PATCH = 'PREPARE_FOR_PATCH';
export const prepareForPatch = () => ({
  type: PREPARE_FOR_PATCH,
});

export const UPDATE_STATS = 'UPDATE_STATS';
export const updateStats = (stats) => ({
  type: UPDATE_STATS,
  stats,
});

export const SET_STATS_ARRAY_FOR_REQUEST = 'SET_STATS_ARRAY_FOR_REQUEST';
export const setsStatsArrayForRequest = (array) => ({
  type: SET_STATS_ARRAY_FOR_REQUEST,
  array,
});

export const END_PATCH_REQUEST = 'END_PATCH_REQUEST';
export const endPatchRequest = () => ({
  type: END_PATCH_REQUEST,
});

export const SET_REQUESTS_PROGRESSION_BAR = 'SET_REQUESTS_PROGRESSION_BAR';
export const setRequestsProgressionBar = (percent) => ({
  type: SET_REQUESTS_PROGRESSION_BAR,
  percent,
});
