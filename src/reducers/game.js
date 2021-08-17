// ACTIONS
import {
  SET_GAMES,
  SET_GAME_ORDER,
  SET_NEWMOON_CARDS,
  SET_PLAYERS_NUMBER,
  SET_ROLES_ATTRIBUTION,
  ADD_NEW_PLAYER,
  SAVE_SELECT_CHANGE,
  SAVE_PLAYER,
} from 'src/actions/gameConfiguration';
import { CHANGE_VALUE } from 'src/actions';

// DATA
import { hiddenRoles } from 'src/data/hiddenRoles';
import { villagePeople } from 'src/data/villagePeople';

// TEMPORARY DATA
const villageRoleList = villagePeople.map((role) => role.name);

const initialState = {
  configuration: {
    playersNumber: 8,
    games: [],
    gameOrder: [], // si classic, on injecte le tableau classic sinon les prefs
    newmoonCards: [], // si classic, on injecte le tableau classic sinon les prefs
    rolesAttribution: 'manual',
  },
  players: [
    {
      id: 1,
      name: 'Micka',
      hiddenRole: 'Loup-Garou',
      villageRole: 'Tavernier',
    },
    {
      id: 2,
      name: 'Quentin',
      hiddenRole: 'Sorcière',
      villageRole: 'Institutrice',
    },
    {
      id: 3,
      name: 'Océane',
      hiddenRole: 'Cupidon',
      villageRole: 'Fermier',
    },
    {
      id: 4,
      name: 'Lud',
      hiddenRole: 'Villageois',
      villageRole: 'Fermier',
    },
    {
      id: 5,
      name: 'Chris',
      hiddenRole: 'Idiot du Village',
      villageRole: 'Vagabond',
    },
    {
      id: 6,
      name: 'BDR',
      hiddenRole: 'Bouc Émissaire',
      villageRole: 'Barbier',
    },
  ],
  pseudo: '',
  role: '',
  village: '',
  rolesList: [],
  villageList: villageRoleList,
  addingNewPlayer: false,
  errorMessage: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_PLAYER: {
      const newPlayersArray = state.players;
      const newId = newPlayersArray.length + 1;
      const newPlayer = {
        id: newId,
        name: state.pseudo,
        hiddenRole: state.role,
        villageRole: state.village,
      };
      newPlayersArray.push(newPlayer);
      return {
        ...state,
        players: newPlayersArray,
        addingNewPlayer: false,
      };
    }
    case CHANGE_VALUE: {
      let newPseudo = '';
      if (action.input === 'pseudoInput') {
        newPseudo = action.value;
      }
      return {
        ...state,
        pseudo: newPseudo,
      };
    }
    case SAVE_SELECT_CHANGE: {
      const roleToSave = action.value;
      let propriety = '';
      if (action.select === 'add-form__roles-select') {
        propriety = 'role';
      }
      else {
        propriety = 'village';
      }
      return {
        ...state,
        [propriety]: roleToSave,
      };
    }
    case ADD_NEW_PLAYER:
      return {
        ...state,
        addingNewPlayer: !state.addingNewPlayer,
      };
    case SET_PLAYERS_NUMBER: {
      const message = [];
      const newConfigurationObject = state.configuration;
      if (action.value > 15) {
        message.push('Le nombre de joueurs ne peut excéder 15.');
      }
      else if (action.value < 8) {
        message.push('Il faut minimum 8 joueurs pour pouvoir jouer.');
      }
      else {
        newConfigurationObject.playersNumber = action.value;
      }

      return {
        ...state,
        configuration: newConfigurationObject,
        errorMessage: message,
      };
    }
    case SET_GAMES: {
      const newConfigurationObject = state.configuration;
      if (newConfigurationObject.games.indexOf(action.value) >= 0) {
        const newArray = newConfigurationObject.games.filter((game) => action.value !== game);
        newConfigurationObject.games = newArray;
      }
      else {
        newConfigurationObject.games.push(action.value);
      }
      const rolesArray = [];
      hiddenRoles.forEach((role) => {
        if (role.expansion === 'Thiercelieux') {
          rolesArray.push(role.name);
        }
      });
      newConfigurationObject.games.forEach((game) => {
        hiddenRoles.forEach((role) => {
          if (game === role.expansion) {
            rolesArray.push(role.name);
          }
        });
      });
      return {
        ...state,
        configuration: newConfigurationObject,
        rolesList: rolesArray,
      };
    }
    case SET_GAME_ORDER: {
      const newConfigurationObject = state.configuration;
      if (action.value === 'classic') {
        newConfigurationObject.gameOrder = []; // inclure ici le tableau d'ordre classique
      }
      else {
        newConfigurationObject.gameOrder = []; // inclure ici le tableau d'ordre
      }
      return {
        ...state,
        configuration: newConfigurationObject,
      };
    }
    case SET_NEWMOON_CARDS: {
      const newConfigurationObject = state.configuration;

      if (action.value === 'classic') {
        newConfigurationObject.newmoonCards = []; // inclure ici le tableau d'ordre classique
      }
      else {
        newConfigurationObject.newmoonCards = []; // inclure ici le tableau d'ordre
      }
      return {
        ...state,
        configuration: newConfigurationObject,
      };
    }
    case SET_ROLES_ATTRIBUTION: {
      const newConfigurationObject = state.configuration;
      newConfigurationObject.rolesAttribution = action.value;
      return {
        ...state,
        configuration: newConfigurationObject,
      };
    }
    default:
      return state;
  }
};

export default reducer;
