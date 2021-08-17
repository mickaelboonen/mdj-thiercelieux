export const SELECT_NEWMOON = 'SELECT_NEWMOON';
export const selectNewmoon = () => ({
  type: SELECT_NEWMOON,
});

export const SET_PLAYERS_NUMBER = 'SET_PLAYERS_NUMBER';
export const setPlayersNumber = (value) => ({
  type: SET_PLAYERS_NUMBER,
  value,
});

export const SET_GAMES = 'SET_GAMES';
export const setGames = (value) => ({
  type: SET_GAMES,
  value,
});

export const SET_GAME_ORDER = 'SET_GAME_ORDER';
export const setGameOrder = (value) => ({
  type: SET_GAME_ORDER,
  value,
});

export const SET_NEWMOON_CARDS = 'SET_NEWMOON_CARDS';
export const setNewmoonCards = (value) => ({
  type: SET_NEWMOON_CARDS,
  value,
});

export const SET_ROLES_ATTRIBUTION = 'SET_ROLES_ATTRIBUTION';
export const setRolesAttribution = (value) => ({
  type: SET_ROLES_ATTRIBUTION,
  value,
});
