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

import { setNewAttributesToPlayers, breakingNews, setWinnerStatus } from 'src/selectors/setGameFunctions';

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
  winner: '',
  percentage: 0,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_DAY: {
      const { players, newspaper, gameOrder } = state;
      // Resetting the gameOrder and the roleToPlay

      const rolesStillAlive = [];
      players.forEach((player) => {
        if (player.isAlive) {
          rolesStillAlive.push(player.hiddenRole);
        }
      });

      const newGameOrder = [];
      gameOrder.forEach((role) => {
        if (!role.firstNight && rolesStillAlive.indexOf(role.name) !== -1) {
          role.hasBeenCalled = false;
          newGameOrder.push(role);
        }
      });


      // Killing the Lovers if need be -------------------------------------------------------------
      // TODO : merge with kill by vote lovers
      const deadLover = players.find((player) => player.roleAttributes.inLove && player.deadTonight && !player.isAlive);

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
      const winner = setWinnerStatus(newspaper, newPlayersArray);

      const finalPlayerArray = newPlayersArray.map((player) => {
        player.deadTonight = false;
        return player;
      });

      // Action from dead people during day (hunter)
      const deadHunter = players.find((player) => player.hiddenRole === 'Chasseur' && !player.isAlive && player.deadTonight);
      if (deadHunter) {
        newspaper.push("Le Chasseur a 30 secondes pour tuer quelqu'un avant de mourir de ses blessures.");
      }

      return {
        ...state,
        dayCount: state.dayCount + 1,
        players: finalPlayerArray,
        newspaper: newspaper,
        winner: winner,
        gameOrder: newGameOrder,
        roleToPlay: newGameOrder[0],
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
      const allSteps = newOrder.length;
      const currentStep = newOrder.indexOf(newRoleToPlay);
      const percentage = Math.round((currentStep / allSteps) * 100);
      return {
        ...state,
        gameOrder: newOrder,
        roleToPlay: newRoleToPlay,
        percentage: percentage,
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
