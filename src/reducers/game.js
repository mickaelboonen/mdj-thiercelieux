/* eslint-disable max-len */
/* eslint-disable no-alert */

// import { gameFakeData, gameFakeOrder } from 'src/data/gameFakeData';

import {
  SAVE_GAME_ARRAYS,
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
  SET_REQUESTS_PROGRESSION_BAR,
} from 'src/actions/game';

import {
  setNewAttributesToPlayers,
  breakingNews,
  setWinnerStatus,
  deleteRoleNotChosen,
} from 'src/selectors/setGameFunctions';
import { setStatRole, setStatWin, setStatVillageRole } from 'src/selectors/victoryFunctions';

const _ = require('lodash/');
// import history from 'src/utils/history';

const initialState = {
  isGameSet: false,
  nightCount: 0,
  dayCount: 0,
  players: [],
  changes: {},
  thiefRoles: [],
  newspaper: [],
  playerToDisplay: {},
  roleToPlay: {},
  gameOrder: [],
  dayTimeRoles: [],
  winner: '',
  percentage: 0,
  isHunterDead: false,
  finalStats: [],
  isPatchDone: false,
  requestsPercent: 0,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_REQUESTS_PROGRESSION_BAR:
      return {
        ...state,
        requestsPercent: action.percent,
      };
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
      newNewspaper.push(`Le Chasseur a d??cid?? d'??liminer ${action.victim} !`);

      if (isVictimInLove) {
        newPlayersArray = state.players.map((player) => {
          if (player.isAlive && player.roleAttributes.inLove) {
            newNewspaper.push(`T??moin de la mort brutale de son ??me soeur, ${player.name} d??cide de la rejoindre dans la mort.`);
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
            newspaper.push(`Le corps sans vie de son ??me soeur, ${player.name} a d??cid?? d'en finir, incapable de continuer sans iel. `);
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
      const {
        changes,
        gameOrder,
        players,
        newspaper,
        thiefRoles,
        dayTimeRoles,
      } = state;
      const allRolesInstructions = [...gameOrder, ...dayTimeRoles, ...thiefRoles];
      const newPlayers = setNewAttributesToPlayers(changes, players, allRolesInstructions);
      const morningEdition = breakingNews(newspaper, changes);
      let newGameOrder = gameOrder;
      if (changes.name === 'Voleur') {
        newGameOrder = deleteRoleNotChosen(changes.values[0], gameOrder, thiefRoles);
      }
      console.log(newGameOrder);
      return {
        ...state,
        changes: {},
        gameOrder: newGameOrder,
        players: newPlayers,
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
    case SAVE_GAME_ARRAYS:
      return {
        ...state,
        players: action.players,
        thiefRoles: action.thiefRoles,
        gameOrder: action.instructions.night,
        dayTimeRoles: action.instructions.day,
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
      const lord = state.players.find((player) => player.villageRole === 'Ch??telain');
      let newPlayersArray = state.players;
      let isVictimInLove = false;
      let { isHunterDead } = state;
      const newNewspaper = state.newspaper;

      if (lord !== undefined) {
        if (!window.confirm(`Est-ce que le ch??telain d??sire sauver ${action.name} ?`)) {
          newPlayersArray = state.players.map((player) => {
            if (player.name === action.name) {
              player.isAlive = true;
              newNewspaper.push(`Le Ch??telain a d??cid?? d'??pargner ${action.name}.`);
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
            newNewspaper.push(`Le Village a d??cid?? d'??liminer ${action.name}.`);
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
            newNewspaper.push(`T??moin de la mort brutale de son ??me soeur, ${player.name} d??cide de la rejoindre dans la mort.`);
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
