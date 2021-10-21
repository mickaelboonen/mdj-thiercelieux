/* eslint-disable max-len */
/* eslint-disable no-alert */
import chasseur from 'src/assets/pictures/roles/chasseur.png';
import cupidon from 'src/assets/pictures/roles/cupidon.png';
import petiteFille from 'src/assets/pictures/roles/petite-fille.png';
import voyante from 'src/assets/pictures/roles/voyante.png';
import voleur from 'src/assets/pictures/roles/voleur.png';
import loupGarou from 'src/assets/pictures/roles/loup-garou.png';
import simpleVillageois from 'src/assets/pictures/roles/simple-villageois.png';
import sorciere from 'src/assets/pictures/roles/sorciere.png';

import {
  SAVE_PLAYERS_FINAL_ARRAY,
  DISPLAY_PLAYER,
  RESET_PLAYER_TO_DISPLAY,
  KILL_BY_VOTE,
  SET_NEXT_ROLE_TO_PLAY,
  CHANGE_PLAYERS_ATTRIBUTES,
  SET_CUPID_ATTRIBUTES,
  SET_WITCH_ATTRIBUTES,
  SET_THIEF_ATTRIBUTES,
} from 'src/actions/game';

import { setSide, setAttributes } from 'src/selectors/setGameFunctions';

import history from 'src/utils/history';

const initialState = {
  counter: 0,
  players: [
    {
      id: 1,
      name: 'Micka',
      hiddenRole: 'Loup-Garou',
      villageRole: '',
      side: 'Loup-Garou',
      picture: loupGarou,
      canBeKilled: true,
      canVote: true,
      isAlive: true,
      attackedTonight: false,
      roleAttributes: {
        inLove: false,
        isCharmed: false,
        deathPotion: false,
        curePotion: false,
      },
    },
    {
      id: 2,
      name: 'Quentin',
      hiddenRole: 'Sorcière',
      villageRole: '',
      side: 'Village',
      picture: sorciere,
      canBeKilled: true,
      canVote: true,
      isAlive: true,
      attackedTonight: false,
      roleAttributes: {
        inLove: false,
        isCharmed: true,
        deathPotion: true,
        curePotion: true,
      },
    },
    {
      id: 3,
      name: 'Océane',
      hiddenRole: 'Cupidon',
      villageRole: '',
      side: 'Village',
      picture: cupidon,
      canBeKilled: true,
      canVote: true,
      isAlive: true,
      attackedTonight: false,
      roleAttributes: {
        inLove: false,
        isCharmed: false,
        deathPotion: false,
        curePotion: false,
      },
    },
    {
      id: 4,
      name: 'Lud',
      hiddenRole: 'Villageois',
      villageRole: '',
      side: 'Village',
      picture: simpleVillageois,
      canBeKilled: true,
      canVote: true,
      isAlive: true,
      attackedTonight: false,
      roleAttributes: {
        inLove: false,
        isCharmed: false,
        deathPotion: false,
        curePotion: false,
      },
    },
    {
      id: 5,
      name: 'Chris',
      hiddenRole: 'Voyante',
      villageRole: '',
      side: 'Village',
      picture: voyante,
      canBeKilled: true,
      canVote: true,
      isAlive: true,
      attackedTonight: false,
      roleAttributes: {
        inLove: false,
        isCharmed: false,
        deathPotion: false,
        curePotion: false,
      },
    },
    {
      id: 6,
      name: 'BDR',
      hiddenRole: 'Chasseur',
      villageRole: '',
      side: 'Village',
      picture: chasseur,
      canBeKilled: true,
      canVote: true,
      isAlive: true,
      attackedTonight: false,
      roleAttributes: {
        inLove: false,
        isCharmed: false,
        deathPotion: false,
        curePotion: false,
      },
    },
    {
      id: 7,
      name: 'Sasha',
      hiddenRole: 'Petite Fille',
      villageRole: '',
      side: 'Solitaire',
      picture: petiteFille,
      canBeKilled: true,
      canVote: true,
      isAlive: true,
      attackedTonight: false,
      roleAttributes: {
        inLove: false,
        isCharmed: false,
        deathPotion: false,
        curePotion: false,
      },
    },
    {
      id: 8,
      name: 'Cara',
      hiddenRole: 'Voleur',
      villageRole: '',
      side: 'Village',
      picture: voleur,
      canBeKilled: false,
      canVote: true,
      isAlive: true,
      attackedTonight: false,
      roleAttributes: {
        inLove: false,
        isCharmed: false,
        deathPotion: false,
        curePotion: false,
      },
    },
    {
      id: 9,
      name: 'Christal',
      hiddenRole: 'Voyante',
      villageRole: 'Châtelain',
      side: 'Loup-Garou',
      picture: loupGarou,
      canBeKilled: true,
      canVote: true,
      isAlive: true,
      attackedTonight: false,
      roleAttributes: {
        inLove: false,
        isCharmed: false,
        deathPotion: false,
        curePotion: false,
      },
    },
  ],
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
  playerToDisplay: {},
  roleToPlay: {},
  gameOrder: [
    {
      name: 'Voleur',
      firstNight: true,
      hasBeenCalled: false,
      picture: voleur,
      text: 'Consigne du role',
      action: 'buttons',
    },
    {
      name: 'Cupidon',
      firstNight: true,
      hasBeenCalled: false,
      picture: cupidon,
      action: 'selects',
    },
    {
      name: 'Amoureux',
      firstNight: true,
      hasBeenCalled: false,
      picture: cupidon,
      action: '',
    },
    {
      name: 'Voyante',
      firstNight: false,
      hasBeenCalled: false,
      picture: voyante,
      action: 'buttons',
    },
    {
      name: 'Loup-Garou',
      firstNight: false,
      hasBeenCalled: false,
      picture: loupGarou,
      action: 'buttons',
    },
    {
      name: 'Sorcière',
      firstNight: false,
      hasBeenCalled: false,
      picture: sorciere,
      action: 'witch',
    },
  ],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_THIEF_ATTRIBUTES: {
      const { newRole } = action;
      const currentThief = state.players.find((player) => player.hiddenRole === 'Voleur');
      const otherPlayers = state.players.filter((player) => player.hiddenRole !== 'Voleur');

      currentThief.hiddenRole = newRole;
      currentThief.roleAttributes.firstnight_call = false;
      currentThief.side = setSide(newRole);
      const attributes = setAttributes(newRole);
      if (attributes !== undefined) {
        attributes.forEach((currentAtt) => {
          currentThief.roleAttributes[currentAtt] = true;
        });
      }
      const players = [];
      for (let i = 1; i <= state.players.length; i += 1) {
        const currentPlayer = otherPlayers.find((player) => player.id === i);
        // console.log(currentPlayer);
        if (currentPlayer) {
          players.push(currentPlayer);
        }
        else {
          players.push(currentThief);
        }
      }
      return {
        ...state,
        players: players,
      };
    }
    case SET_CUPID_ATTRIBUTES: {
      const { firstLover, secondLover } = action;
      const newPlayersArray = state.players.map((player) => {
        if (player.name === firstLover || player.name === secondLover) {
          player.roleAttributes.inLove = true;
        }
        return player;
      });
      return {
        ...state,
        players: newPlayersArray,
      };
    }
    case SET_WITCH_ATTRIBUTES: {
      let newPlayersArray = state.players;
      const { wolfVictim, witchVictim } = action;

      if (wolfVictim !== 'Personne') {
        newPlayersArray = newPlayersArray.map((player) => {
          if (player.name === wolfVictim) {
            player.isAlive = true;
            player.attackedTonight = false;
          }
          if (player.hiddenRole === 'Sorcière') {
            player.roleAttributes.curePotion = false;
          }
          return player;
        });
      }
      if (witchVictim !== 'Personne') {
        newPlayersArray = newPlayersArray.map((player) => {
          if (player.name === witchVictim) {
            player.isAlive = false;
            player.roleAttributes.deadByPotion = true;
          }
          if (player.hiddenRole === 'Sorcière') {
            player.roleAttributes.deathPotion = false;
          }
          return player;
        });
      }

      return {
        ...state,
        players: newPlayersArray,
      };
    }
    case CHANGE_PLAYERS_ATTRIBUTES: {
      const { currentRole, victim } = action;
      let newPlayersArray = state.players;
      if (currentRole === 'Loup-Garou') {
        newPlayersArray = state.players.map((player) => {
          if (player.name === victim) {
            player.isAlive = false;
            player.attackedTonight = true;
          }
          return player;
        });
      }
      return {
        ...state,
        players: newPlayersArray,
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
        newRoleToPlay = {};
        history.push('/lever-de-soleil');
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
