import { SAVE_PLAYERS_FINAL_ARRAY } from 'src/actions/game';

const initialState = {
  players: [
    {
      id: 1,
      name: 'Micka',
      hiddenRole: 'Loup-Garou',
      side: 'Loup-Garou',
    },
    {
      id: 2,
      name: 'Quentin',
      hiddenRole: 'Sorcière',
      side: 'Village',
    },
    {
      id: 3,
      name: 'Océane',
      hiddenRole: 'Cupidon',
      side: 'Village',
    },
    {
      id: 4,
      name: 'Lud',
      hiddenRole: 'Villageois',
      side: 'Village',
    },
    {
      id: 5,
      name: 'Chris',
      hiddenRole: 'Idiot du Village',
      side: 'Village',
    },
    {
      id: 6,
      name: 'BDR',
      hiddenRole: 'Bouc Émissaire',
      side: 'Village',
    },
    {
      id: 7,
      name: 'Sasha',
      hiddenRole: 'Joueur de Flute',
      side: 'Solitaire',
    },
    {
      id: 8,
      name: 'Cara',
      hiddenRole: 'Servante Dévouée',
      side: 'Village',
    },
    {
      id: 9,
      name: 'Christal',
      hiddenRole: 'Loup-Garou',
      side: 'Loup-Garou',
    },
  ],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_PLAYERS_FINAL_ARRAY:
      return {
        ...state,
        players: action.array,
      };
    default:
      return state;
  }
};

export default reducer;
