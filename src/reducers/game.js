/* eslint-disable max-len */
/* eslint-disable no-alert */

import { gameFakeData, gameFakeOrder } from 'src/data/gameFakeData';

import {
  SAVE_PLAYERS_FINAL_ARRAY,
  DISPLAY_PLAYER,
  RESET_PLAYER_TO_DISPLAY,
  KILL_BY_VOTE,
  SET_NEXT_ROLE_TO_PLAY,
  SET_CHANGES,
  SET_DAY,
  CHANGE_PLAYERS_ATTRIBUTES,
} from 'src/actions/game';

import { setNewAttributesToPlayers, breakingNews } from 'src/selectors/setGameFunctions';

// import history from 'src/utils/history';

const initialState = {
  nightCount: 1,
  dayCount: 0,
  players: gameFakeData,
  changes: {},
  thiefRoles: [
    {
      name: 'Simple Villageois',
      picture: '',
    },
    {
      name: 'Loup-Garou',
      picture: '',
    },
  ],
  newspaper: [],
  playerToDisplay: {},
  roleToPlay: {},
  gameOrder: gameFakeOrder,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_DAY: {
      const { players, newspaper } = state;
      // Resetting the gameOrder and the roleToPlay
      // Killing the Lovers if need be -------------------------------------------------------------
      // TODO : merge with kill by vote lovers
      const deadLover = players.find((player) => player.roleAttributes.inLove && player.deadTonight && !player.isAlive);
      console.log('deadlover', deadLover);
      let newPlayersArray = players;
      if (deadLover !== undefined) {
        newPlayersArray = players.map((player) => {
          if (player.isAlive && player.roleAttributes.inLove) {
            newspaper.push(`Le corps sans vie de son âme soeur, ${player.name} a décidé d'en finir, incapable de continuer sans iel. `);
            player.isAlive = false;
          }
          return player;
        });
      }
      // Checking if there is any win ---------------------------------------------------------------
      const sidesArray = [];
      players.forEach((player) => {
        if (player.isAlive) {
          sidesArray.push(player.side);
        }
      });
      if (newPlayersArray.length === 2) {
        const areTheyLovers = newPlayersArray.filter((player) => player.roleAttributes.inLove);
        if (areTheyLovers.length === 2) {
          console.log('Lovers Win');
          newspaper.push('Lovers wins');
        }
      }
      else if (sidesArray.indexOf('Loup-Garou') === -1) {
        console.log('Village wins');
        newspaper.push('Villages wins');
      }
      else if (sidesArray.indexOf('Village') === -1) {
        console.log('Loup-Garou wins');
        newspaper.push('Werewolves win');
      }
      // TODO : Abominable Sectaire, Joueur de Flute, Ange, Loup Garou Blanc

      // Action from dead people during day (hunter)
      const deadHunter = players.find((player) => player.hiddenRole === 'Chasseur' && !player.isAlive && player.deadTonight);
      if (deadHunter) {
        newspaper.push("Le Chasseur a 30 secondes pour tuer quelqu'un avant de mourir de ses blessures.");
      }

      return {
        ...state,
        dayCount: state.dayCount + 1,
        players: newPlayersArray,
        newspaper: newspaper,
      };
    }
    case SET_CHANGES:
      return {
        ...state,
        changes: action.changes,
      };
    case CHANGE_PLAYERS_ATTRIBUTES: {
      const players = setNewAttributesToPlayers(state.changes, state.players);
      const morningEdition = breakingNews(state.newspaper, state.changes);
      return {
        ...state,
        changes: {},
        players: players,
        newspaper: morningEdition,
      };
    }
    case SET_NEXT_ROLE_TO_PLAY: {
      const newOrder = state.gameOrder.map((role) => {
        if (role.name === action.currentName) {
          role.hasBeenCalled = true;
        }
        return role;
      });
      let newRoleToPlay = newOrder.find((role) => !role.hasBeenCalled);
      if (newRoleToPlay === undefined) {
        newRoleToPlay = {
          phase: 'day',
        };
      }
      return {
        ...state,
        gameOrder: newOrder,
        roleToPlay: newRoleToPlay,
      };
    }
    case SAVE_PLAYERS_FINAL_ARRAY:
      return {
        ...state,
        players: action.array,
      };
    case DISPLAY_PLAYER: {
      const newPlayerToDisplay = state.players.find((player) => player.id === action.id);
      return {
        ...state,
        playerToDisplay: newPlayerToDisplay,
      };
    }
    case RESET_PLAYER_TO_DISPLAY: {
      return {
        ...state,
        playerToDisplay: {},
      };
    }
    case KILL_BY_VOTE: {
      const lord = state.players.find((player) => player.villageRole === 'Châtelain');
      let newPlayersArray = state.players;

      if (lord !== undefined) {
        if (!window.confirm(`Est-ce que le châtelain désire sauver ${action.name} ?`)) {
          newPlayersArray = state.players.map((player) => {
            if (player.name === action.name) {
              player.isAlive = false;
            }
            return player;
          });
        }
      }
      else {
        newPlayersArray = state.players.map((player) => {
          if (player.name === action.name) {
            player.isAlive = false;
            return player;
          }
          return player;
        });
      }

      /**
       * Returns array of players alive and in love
       */
      const loversAlive = state.players.filter((lover) => lover.roleAttributes.inLove && lover.isAlive);

      // If one of the lovers just died, the other dies as well
      if (loversAlive.length === 1) {
        newPlayersArray = newPlayersArray.map((player) => {
          if (player.name === loversAlive[0].name) {
            player.isAlive = false;
            return player;
          }
          return player;
        });
      }
      return {
        ...state,
        players: newPlayersArray,
      };
    }
    default:
      return state;
  }
};

export default reducer;
