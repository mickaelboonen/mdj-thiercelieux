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
} from 'src/actions/game';

const initialState = {
  players: [
    {
      id: 1,
      name: 'Micka',
      hiddenRole: 'Loup-Garou',
      side: 'Loup-Garou',
      picture: loupGarou,
      roleAttributes: {
        inLove: true,
        isCharmed: true,
      },
    },
    {
      id: 2,
      name: 'Quentin',
      hiddenRole: 'Sorcière',
      side: 'Village',
      picture: sorciere,
      roleAttributes: {
        inLove: false,
        isCharmed: true,
      },
    },
    {
      id: 3,
      name: 'Océane',
      hiddenRole: 'Cupidon',
      side: 'Village',
      picture: cupidon,
      roleAttributes: {
        inLove: false,
        isCharmed: true,
      },
    },
    {
      id: 4,
      name: 'Lud',
      hiddenRole: 'Villageois',
      side: 'Village',
      picture: simpleVillageois,
      roleAttributes: {
        inLove: false,
        isCharmed: false,
      },
    },
    {
      id: 5,
      name: 'Chris',
      hiddenRole: 'Idiot du Village',
      side: 'Village',
      picture: idiotDuVillage,
      roleAttributes: {
        inLove: false,
        isCharmed: false,
      },
    },
    {
      id: 6,
      name: 'BDR',
      hiddenRole: 'Bouc Émissaire',
      side: 'Village',
      picture: boucEmissaire,
      roleAttributes: {
        inLove: false,
        isCharmed: false,
      },
    },
    {
      id: 7,
      name: 'Sasha',
      hiddenRole: 'Joueur de Flute',
      side: 'Solitaire',
      picture: joueurDeFlute,
      roleAttributes: {
        inLove: false,
        isCharmed: false,
      },
    },
    {
      id: 8,
      name: 'Cara',
      hiddenRole: 'Grand Méchant Loup',
      side: 'Village',
      picture: grandMechantLoup,
      roleAttributes: {
        inLove: false,
        isCharmed: true,
      },
    },
    {
      id: 9,
      name: 'Christal',
      hiddenRole: 'Loup-Garou',
      side: 'Loup-Garou',
      picture: loupGarou,
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
    default:
      return state;
  }
};

export default reducer;
