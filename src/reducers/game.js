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
  KILL_PLAYER,
  SET_NIGHT,
  SET_STATS_ARRAY_FOR_REQUEST,
  END_PATCH_REQUEST,
} from 'src/actions/game';

import { setNewAttributesToPlayers, breakingNews, setWinnerStatus } from 'src/selectors/setGameFunctions';
import { setStatRole, setStatWin, setStatVillageRole } from 'src/selectors/victoryFunctions';

const _ = require('lodash/');
// import history from 'src/utils/history';

const initialState = {
  isGameSet: true,
  nightCount: 0,
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
  isHunterDead: false,
  finalStats: [],
  isPatchDone: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case END_PATCH_REQUEST:
      return {
        ...state,
        isPatchDone: true,
      };
    case SET_STATS_ARRAY_FOR_REQUEST: {
      const statsArray = [];
      const { winner } = state;
      state.players.forEach((player) => {
        const newPlayer = {};
        if (player.userId !== null) {
          newPlayer.userId = player.userId;
          newPlayer.role = setStatRole(player);

          if (player.side === winner) {
            newPlayer.win = setStatWin(player, winner);
          }

          if (player.villageRole !== '') {
            newPlayer.villageRole = setStatVillageRole(player);
          }

          if (player.roleAttributes.inLove) {
            newPlayer.lover = 'lover';
          }

          if (player.deathCause !== '') {
            newPlayer.deathCause = player.deathCause;
          }
        }
        const isObjectEmpty = _.isEmpty(newPlayer);
        if (!isObjectEmpty) {
          statsArray.push(newPlayer);
        }
      });
      return {
        ...state,
        finalStats: statsArray,
        // isArraySet: true,
      };
    }
    case KILL_PLAYER: {
      let isVictimInLove = false;
      let newPlayersArray = state.players.map((player) => {
        if (player.name === action.victim) {
          player.isAlive = false;
          player.deathCause = 'death_by_hunter';

          if (player.roleAttributes.inLove) {
            isVictimInLove = true;
          }
        }
        return player;
      });
      const hunterMessage = "Le Chasseur a 30 secondes pour tuer quelqu'un avant de mourir de ses blessures.";
      const newNewspaper = state.newspaper.filter((news) => news !== hunterMessage);
      newNewspaper.push(`Le Chasseur a décidé d'éliminer ${action.victim} !`);

      if (isVictimInLove) {
        newPlayersArray = state.players.map((player) => {
          if (player.isAlive && player.roleAttributes.inLove) {
            newNewspaper.push(`Témoin de la mort brutale de son âme soeur, ${player.name} décide de la rejoindre dans la mort.`);
            player.isAlive = false;
            player.deathCause = 'death_by_love';
          }
          return player;
        });
      }

      return {
        ...state,
        players: newPlayersArray,
        newspaper: newNewspaper,
        isHunterDead: false,
      };
    }
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
            player.deathCause = 'death_by_love';
          }
          return player;
        });
      }
      // Checking if there is any win ---------------------------------------------------------------
      const winner = setWinnerStatus(newspaper, newPlayersArray);
      // Action from dead people during day (hunter)
      const deadHunter = players.find((player) => player.hiddenRole === 'Chasseur' && !player.isAlive && player.deadTonight);
      if (deadHunter) {
        newspaper.push("Le Chasseur a 30 secondes pour tuer quelqu'un avant de mourir de ses blessures.");
      }
      const finalPlayerArray = newPlayersArray.map((player) => {
        player.deadTonight = false;
        return player;
      });
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
    case SET_NIGHT: {
      return {
        ...state,
        nightCount: state.nightCount + 1,
        isHunterDead: false,
        // players: finalPlayerArray,
        // newspaper: newspaper,
        // winner: winner,
        // gameOrder: newGameOrder,
        // roleToPlay: newGameOrder[0],
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
        isGameSet: true,
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
      let isVictimInLove = false;
      let { isHunterDead } = state;
      const newNewspaper = state.newspaper;

      if (lord !== undefined) {
        if (!window.confirm(`Est-ce que le châtelain désire sauver ${action.name} ?`)) {
          newPlayersArray = state.players.map((player) => {
            if (player.name === action.name) {
              player.isAlive = true;
              newNewspaper.push(`Le Châtelain a décidé d'épargner ${action.name}.`);
            }
            return player;
          });
        }
      }
      else {
        newPlayersArray = state.players.map((player) => {
          if (player.name === action.name) {
            player.isAlive = false;
            player.deathCause = 'death_by_vote';
            newNewspaper.push(`Le Village a décidé d'éliminer ${action.name}.`);
            if (player.hiddenRole === 'Chasseur') {
              isHunterDead = true;
            }

            if (player.roleAttributes.insLove) {
              isVictimInLove = true;
            }
            return player;
          }
          return player;
        });
      }

      if (isVictimInLove) {
        newPlayersArray = state.players.map((player) => {
          if (player.isAlive && player.roleAttributes.inLove) {
            newNewspaper.push(`Témoin de la mort brutale de son âme soeur, ${player.name} décide de la rejoindre dans la mort.`);
            player.isAlive = false;
            player.deathCause = 'death_by_love';
          }
          return player;
        });
      }

      // Sets back the DOM to its original state
      const whoGetsTheChop = document.querySelectorAll('.player-info');
      whoGetsTheChop.forEach((player) => {
        player.classList.remove('player-info--to-be-chopped');
      });

      const winner = setWinnerStatus(newNewspaper, newPlayersArray);
      return {
        ...state,
        players: newPlayersArray,
        newspaper: newNewspaper,
        isHunterDead: isHunterDead,
        winner: winner,
      };
    }
    default:
      return state;
  }
};

export default reducer;
