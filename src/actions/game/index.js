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
//--------------------------------------------------------------------------------------------------
export const CHANGE_PLAYERS_ATTRIBUTES = 'CHANGE_PLAYERS_ATTRIBUTES';
export const changePlayersAttributes = () => ({
  type: CHANGE_PLAYERS_ATTRIBUTES,
});

// export const SET_WITCH_ATTRIBUTES = 'SET_WITCH_ATTRIBUTES';
// export const setWitchAttributes = (wolfVictim, witchVictim) => ({
//   type: SET_WITCH_ATTRIBUTES,
//   wolfVictim,
//   witchVictim,
// });

// export const SET_CUPID_ATTRIBUTES = 'SET_CUPID_ATTRIBUTES';
// export const setCupidAttributes = (firstLover, secondLover) => ({
//   type: SET_CUPID_ATTRIBUTES,
//   firstLover,
//   secondLover,
// });

export const SET_CHANGES = 'SET_CHANGES';
export const setChanges = (changes) => ({
  type: SET_CHANGES,
  changes,
});


// export const SET_THIEF_ATTRIBUTES = 'SET_THIEF_ATTRIBUTES';
// export const setThiefAttributes = (changes) => ({
//   type: SET_THIEF_ATTRIBUTES,
//   changes,
// });


// export const SET_WEREWOLF_ATTRIBUTES = 'SET_WEREWOLF_ATTRIBUTES';
// export const setWerewolfAttributes = (victim) => ({
//   type: SET_WEREWOLF_ATTRIBUTES,
//   victim,
// });
