/* eslint-disable max-len */
/* eslint-disable no-alert */
import boucEmissaire from 'src/assets/pictures/roles/bouc-emissaire.png';
import cupidon from 'src/assets/pictures/roles/cupidon.png';
import grandMechantLoup from 'src/assets/pictures/roles/grand-mechant-loup.png';
import idiotDuVillage from 'src/assets/pictures/roles/idiot-du-village.png';
import joueurDeFlute from 'src/assets/pictures/roles/joueur-flute.png';
import loupGarou from 'src/assets/pictures/roles/loup-garou.png';
import simpleVillageois from 'src/assets/pictures/roles/simple-villageois.png';
import sorciere from 'src/assets/pictures/roles/sorciere.png';

import {
  SAVE_PLAYERS_FINAL_ARRAY,
  DISPLAY_PLAYER,
  RESET_PLAYER_TO_DISPLAY,
  KILL_BY_VOTE,
} from 'src/actions/game';

const initialState = {
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
      roleAttributes: {
        inLove: true,
        isCharmed: true,
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
      roleAttributes: {
        inLove: false,
        isCharmed: true,
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
      roleAttributes: {
        inLove: false,
        isCharmed: true,
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
      roleAttributes: {
        inLove: false,
        isCharmed: false,
      },
    },
    {
      id: 5,
      name: 'Chris',
      hiddenRole: 'Idiot du Village',
      villageRole: '',
      side: 'Village',
      picture: idiotDuVillage,
      canBeKilled: true,
      canVote: true,
      isAlive: true,
      roleAttributes: {
        inLove: false,
        isCharmed: false,
      },
    },
    {
      id: 6,
      name: 'BDR',
      hiddenRole: 'Bouc Émissaire',
      villageRole: '',
      side: 'Village',
      picture: boucEmissaire,
      canBeKilled: true,
      canVote: true,
      isAlive: true,
      roleAttributes: {
        inLove: false,
        isCharmed: false,
      },
    },
    {
      id: 7,
      name: 'Sasha',
      hiddenRole: 'Joueur de Flute',
      villageRole: '',
      side: 'Solitaire',
      picture: joueurDeFlute,
      canBeKilled: true,
      canVote: true,
      isAlive: true,
      roleAttributes: {
        inLove: false,
        isCharmed: false,
      },
    },
    {
      id: 8,
      name: 'Cara',
      hiddenRole: 'Grand Méchant Loup',
      villageRole: '',
      side: 'Village',
      picture: grandMechantLoup,
      canBeKilled: false,
      canVote: true,
      isAlive: true,
      roleAttributes: {
        inLove: false,
        isCharmed: true,
      },
    },
    {
      id: 9,
      name: 'Christal',
      hiddenRole: 'Loup-Garou',
      villageRole: 'Châtelain',
      side: 'Loup-Garou',
      picture: loupGarou,
      canBeKilled: true,
      canVote: true,
      isAlive: true,
      roleAttributes: {
        inLove: true,
        isCharmed: false,
      },
    },
  ],
  playerToDisplay: {},
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
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
