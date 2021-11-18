/* eslint-disable max-len */
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
  SAVE_ROLE_ACTION,
  SAVE_ROLES_RANDOMLY,
  SAVE_PLAYER_FROM_USER,
  CHANGE_PSEUDO_INPUT_VALUE,
  CHECK_FOR_THIEF,
  GO_BACK_TO_PLAYERS_LIST,
  DELETE_PLAYER,
  APPLY_SELECTED_CONFIGURATION,
  SET_CONFIG_ERROR_MESSAGE,
} from 'src/actions/gameConfiguration';
import { CLEAR_INPUT, SAVE_HOME_DATA } from 'src/actions';

// SELECTORS
import {
  updateHiddenRolesArray,
  updateVillageRolesArray,
  checkRolesNumber,
  checkTotalRoles,
  setRolesRandomly,
  checkConfiguration,
  saveRole,
} from 'src/selectors/configurationFunctions';

const initialState = {
  configuration: {
    playersNumber: 9,
    games: [],
    gameOrder: 'classic', // si classic, on injecte le tableau classic sinon les prefs
    newmoonCards: [], // si classic, on injecte le tableau classic sinon les prefs
    rolesAttribution: 'manual',
  },
  allRolesArray: [],
  villageRoles: [],
  players: [
    {
      id: 1,
      name: 'Micka',
      hiddenRole: 'Loup-Garou',
      userId: null,
      villageRole: '',
    },
    {
      id: 2,
      name: 'Quentin',
      hiddenRole: 'Sorcière',
      userId: null,
      villageRole: '',
    },
    {
      id: 3,
      name: 'Océane',
      hiddenRole: 'Cupidon',
      userId: null,
      villageRole: '',
    },
    {
      id: 4,
      name: 'Lud',
      hiddenRole: 'Simple Villageois',
      userId: null,
      villageRole: '',
    },
    {
      id: 5,
      name: 'Chris',
      hiddenRole: 'Voyante',
      userId: null,
      villageRole: '',
    },
    {
      id: 6,
      name: 'BDR',
      hiddenRole: 'Loup-Garou',
      userId: null,
      villageRole: '',
    },
    {
      id: 7,
      name: 'Sasha',
      hiddenRole: 'Chasseur',
      userId: null,
      villageRole: '',
    },
    {
      id: 8,
      name: 'Cara',
      hiddenRole: 'Simple Villageois',
      userId: null,
      villageRole: '',
    },
    {
      id: 9,
      name: 'Benoit',
      hiddenRole: 'Petite Fille',
      userId: null,
      villageRole: '',
    },
  ],
  pseudo: '',
  userId: null,
  role: '',
  village: '',
  rolesList: [],
  villageList: [],
  addingNewPlayer: false,
  // addNewPlayer: false,
  errorMessage: [],
  chosenHiddenRoles: [],
  chosenVillageRoles: [],
  configDone: false,
  thiefRoles: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case APPLY_SELECTED_CONFIGURATION: {
      const newChosenRoles = action.config.values;
      return {
        ...state,
        chosenHiddenRoles: newChosenRoles,
        errorMessage: [],
        configDone: true,
      };
    }
    case SET_CONFIG_ERROR_MESSAGE: {
      const { error } = action;
      let message = '';
      if (error === '+') {
        message = 'Il y a trop de personnages dans cette configuration.';
      }
      else {
        message = "Il n'y a pas assez de personnages dans cette configuration.";
      }
      const newErrorMessage = [];
      newErrorMessage.push(message);
      return {
        ...state,
        errorMessage: newErrorMessage,
        configDone: false,
      };
    }
    case DELETE_PLAYER: {
      const newPlayersArray = state.players.filter((player) => player.name !== action.name);
      return {
        ...state,
        players: newPlayersArray,
      };
    }
    case GO_BACK_TO_PLAYERS_LIST:
      return {
        ...state,
        addingNewPlayer: false,
      };
    case CHECK_FOR_THIEF: {
      const thief = state.chosenHiddenRoles.find((role) => role === 'Voleur');
      const newRolesList = state.chosenHiddenRoles;
      if ((state.configuration.playersNumber + 2) !== newRolesList.length && thief !== undefined) {
        newRolesList.push('Simple Villageois');
        newRolesList.push('Simple Villageois');
      }
      return {
        ...state,
        chosenHiddenRoles: newRolesList,
      };
    }
    case CLEAR_INPUT:
      return {
        ...state,
        pseudo: '',
      };
    case SAVE_PLAYER_FROM_USER:
      return {
        ...state,
        pseudo: action.username,
        userId: action.id,
      };
    case SAVE_ROLES_RANDOMLY: {
      const rolesArrays = setRolesRandomly(state.chosenHiddenRoles, state.players, 'hidden');
      let playersArray = rolesArrays.playersWithRoles;
      const thiefArray = rolesArrays.thiefRoles;

      if (state.configuration.games.indexOf('Le Village') >= 0) {
        playersArray = setRolesRandomly(state.chosenVillageRoles, playersArray, 'village');
      }
      return {
        ...state,
        players: playersArray,
        thiefRoles: thiefArray,
      };
    }
    case SAVE_ROLE_ACTION: {
      const { name, id, number } = action;
      const messageError = state.errorMessage;
      let hiddenRolesArray = state.chosenHiddenRoles;
      let villageRolesArray = state.chosenVillageRoles;
      let newMessageArray = [];
      if (id.includes('hidden')) {
        hiddenRolesArray = saveRole(action, hiddenRolesArray);
        newMessageArray = checkTotalRoles(hiddenRolesArray, messageError, state.configuration.playersNumber, 'hidden');
      }
      else if (id.includes('village')) {
        villageRolesArray = saveRole(action, villageRolesArray);
        newMessageArray = checkTotalRoles(villageRolesArray, messageError, state.configuration.playersNumber, 'village');
      }
      const finalErrorArray = checkRolesNumber(name, number, newMessageArray);

      // Checks if the number of roles chosen is the same as the number of players
      // Returns bool
      const configDone = checkConfiguration(state.configuration, hiddenRolesArray.length, villageRolesArray.length);
      return {
        ...state,
        chosenHiddenRoles: hiddenRolesArray,
        chosenVillageRoles: villageRolesArray,
        errorMessage: finalErrorArray,
        configDone: configDone,
      };
    }
    case SAVE_PLAYER: {
      const newPlayersArray = state.players;
      const newId = newPlayersArray.length + 1;
      const roleToSave = state.role;
      const villageRoleToSave = state.village;

      const newPlayer = {
        id: newId,
        userId: state.userId,
        name: state.pseudo,
        hiddenRole: roleToSave,
        villageRole: state.village,
      };
      newPlayersArray.push(newPlayer);

      // -------------------------------------------------------------------------------------------
      const newRolesArray = updateHiddenRolesArray(roleToSave, newPlayersArray, state.rolesList);

      // -------------------------------------------------------------------------------------------
      const newVillageArray = updateVillageRolesArray(villageRoleToSave, newPlayersArray, state.villageList);

      return {
        ...state,
        players: newPlayersArray,
        addingNewPlayer: false,
        pseudo: '',
        userId: null,
        role: '',
        village: '',
        rolesList: newRolesArray,
        villageList: newVillageArray,
      };
    }
    case CHANGE_PSEUDO_INPUT_VALUE:
      return {
        ...state,
        pseudo: action.value,
      };
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
        newConfigurationObject.playersNumber = Number(action.value);
      }
      return {
        ...state,
        configuration: newConfigurationObject,
        errorMessage: message,
      };
    }
    case SET_GAMES: {
      const newConfigurationObject = state.configuration;

      // If the current game (the action value) is already in the games array of the configuration object
      if (newConfigurationObject.games.indexOf(action.value) >= 0) {
        // We filter this array and delete the current game
        const newArray = newConfigurationObject.games.filter((game) => action.value !== game);
        // Then we give the new array, stripped from the current game, to the configuration object
        newConfigurationObject.games = newArray;
      }
      // If it's not the games array
      else {
        // We push the current game into the array
        newConfigurationObject.games.push(action.value);
      }

      // We create the new array for the Roles that are associated to the selected games
      const rolesArray = [];

      // First, we get all roles from the base game
      state.allRolesArray.forEach((role) => {
        // We check if it belongs to the Thiercelieux game
        if (role.game === 'Loup-Garou de Thiercelieux') {
          // If it does, we push it already into the role array for every game will need these roles
          rolesArray.push(role.name);
        }
      });
      newConfigurationObject.games.forEach((game) => {
        state.allRolesArray.forEach((role) => {
          if (game === role.game) {
            rolesArray.push(role.name);
          }
        });
      });

      let villagersRoles = state.villageList;
      // If the user has selected 'Le Village' for the game
      if (action.value === 'Le Village') {
      // We strip all roles from their determinants
        const villageRoleList = state.villageRoles.map((role) => {
          let deconstructedName = '';
          let det = '';
          // TODO : use regex to split string in one time
          // In the meantime, we strip 'L'institutrice' manually to get only the name
          if (role.name === "L'Institutrice") {
            deconstructedName = 'Institutrice';
          }
          else {
            // We split the string : first we get the determinant, second we get the name
            [det, deconstructedName] = role.name.split(' ');
          }
          // We return the name without det.
          return deconstructedName;
        });
        // If 'Le Village' has been added to the games settings
        if (newConfigurationObject.games.indexOf('Le Village') !== -1) {
          // Then we set the roles list for the game
          villagersRoles = villageRoleList;
        }
        else {
          villagersRoles = [];
        }
      }
      return {
        ...state,
        configuration: newConfigurationObject,
        rolesList: rolesArray,
        villageList: villagersRoles,
      };
    }
    case SET_GAME_ORDER: {
      const newConfigurationObject = state.configuration;
      newConfigurationObject.gameOrder = action.value;
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
    case SAVE_HOME_DATA: {
      let { allRolesArray, rolesList, villageRoles } = state;

      // If the category is hiddenRoles
      if (action.category === 'hiddenRoles') {
        // allRolesArray takes the action data value
        allRolesArray = action.data;
        const newRolesList = [];

        // Then, for each role
        allRolesArray.forEach((role) => {
          // We check if it belongs to the Thiercelieux game
          if (role.game === 'Loup-Garou de Thiercelieux') {
            // If it does, we push it already into the role array for every game will need these roles
            newRolesList.push(role.name);
            rolesList = newRolesList;
          }
        });
      }
      // If the category is villageRoles
      else if (action.category === 'villageRoles') {
        // We set the array in the villageRoles variable
        villageRoles = action.data;
      }
      return {
        ...state,
        allRolesArray: allRolesArray,
        villageRoles: villageRoles,
        rolesList: rolesList,
      };
    }
    default:
      return state;
  }
};

export default reducer;
