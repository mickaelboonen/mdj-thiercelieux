import { generateRandomNumber } from 'src/selectors/generateRandomNumber';

/**
 * @param {string} currentRole
 * @param {array} playersArray
 * @param {array} list
 * @returns array
 */
export const updateHiddenRolesArray = (currentRole, playersArray, list) => {
  let newRolesArray = [];

  if (currentRole === '2 Soeurs') {
    const sisters = playersArray.filter((player) => player.hiddenRole === currentRole);
    if (sisters.length === 2) {
      newRolesArray = list.filter((role) => role !== currentRole);
    }
  }
  else if (currentRole === '3 Frères') {
    const brothers = playersArray.filter((player) => player.hiddenRole === currentRole);
    if (brothers.length === 3) {
      newRolesArray = list.filter((role) => role !== currentRole);
    }
  }
  else if (currentRole === 'Loup-Garou' || currentRole === 'Simple Villageois') {
    newRolesArray = list;
  }

  else {
    newRolesArray = list.filter((role) => role !== currentRole);
  }

  return newRolesArray;
};

/**
 * @param {string} currentRole
 * @param {array} playersArray
 * @param {array} list
 * @returns array
 */
export const updateVillageRolesArray = (currentRole, playersArray, list) => {
  let newVillageArray = list;
  if (currentRole === 'Fermier') {
    const farmers = playersArray.filter((player) => player.villageRole === currentRole);
    if (farmers.length === 6) {
      newVillageArray = list.filter((role) => role !== currentRole);
    }
  }
  else if (currentRole === 'Vagabond') {
    const vagabonds = playersArray.filter((player) => player.villageRole === currentRole);
    if (vagabonds.length === 15) {
      newVillageArray = list.filter((role) => role !== currentRole);
    }
  }
  else {
    newVillageArray = list.filter((role) => role !== currentRole);
  }

  return newVillageArray;
};

/**
 * @param {string} role
 * @param {string} value
 * @param {array} errors
 * @returns array
 */
export const checkRolesNumber = (role, value, errors) => {
  let message = '';
  let newErrorsArray = errors;
  if (value >= 0) {
    let max = 1;

    if (role === 'Fermier') {
      max = 6;
      message = `Vous avez sélectionné trop de ${role}s. Il ne peut y en avoir que ${max} maximum.`;
      if (value > max) {
        newErrorsArray.push(message);
      }
      else if (value <= max || value === '') {
        newErrorsArray = errors.filter((currentMessage) => currentMessage !== message);
      }
    }
    else if (role === 'Vagabond') {
      max = 15;
      message = `Vous avez sélectionné trop de ${role}s. Il ne peut y en avoir que ${max} maximum.`;
      if (value > max) {
        newErrorsArray.push(message);
      }
      else if (value <= max || value === '') {
        newErrorsArray = errors.filter((currentMessage) => currentMessage !== message);
      }
    }
    else if (role === 'Villageois' || role === 'Loup-Garou') {
      message = '';
    }
    else {
      max = 1;
      message = `Vous avez sélectionné trop de ${role}. Il ne peut y en avoir que ${max} maximum.`;
      if (value > max) {
        newErrorsArray.push(message);
      }
    }
  }
  else if (value < 0) {
    message = 'Vous ne pouvez pas avoir de nombre négatif.';
    newErrorsArray.push(message);
  }
  const finalErrorArray = newErrorsArray.filter((currentMessage) => currentMessage !== '');
  return finalErrorArray;
};

/**
 * @param {array} roles
 * @param {array} errors
 * @param {number} number
 * @param {string} category
 * @returns array
 */
export const checkTotalRoles = (roles, errors, number, category) => {
  let message = '';
  let newErrorMessageArray = errors;
  if (category === 'hidden') {
    message = 'Vous avez sélectionné plus de rôles que de joueurs. Veuillez modifier la sélection.';
    if (roles.length > number && newErrorMessageArray.indexOf(message) === -1) {
      newErrorMessageArray.push(message);
    }
    else if (roles.length <= number) {
      newErrorMessageArray = errors.filter((currentMessage) => currentMessage !== message && message !== '');
    }
  }
  else {
    message = 'Vous avez sélectionné plus de Villageois que de joueurs. Veuillez modifier la sélection.';
    if (roles.length > number && newErrorMessageArray.indexOf(message) === -1) {
      newErrorMessageArray.push(message);
    }
    else if (roles.length <= number) {
      newErrorMessageArray = errors.filter((currentMessage) => currentMessage !== message && message !== '');
    }
  }
  return newErrorMessageArray;
};

/**
 * @param {array} roles
 * @param {array} players
 * @param {string} category
 * @returns array
 */
export const setRolesRandomly = (roles, players, category) => {
  let playersWithRoles = [];
  let newRoles = roles;
  if (category === 'hidden') {
    playersWithRoles = players.map((player) => {
      let playersNewRole = '';
      let randomNumber = generateRandomNumber(newRoles.length);

      if (newRoles.length === 1) {
        randomNumber = 0;
      }
      playersNewRole = newRoles[randomNumber];
      player.hiddenRole = playersNewRole;
      newRoles[randomNumber] = '';
      newRoles = newRoles.filter((role) => role !== '');
      return player;
    });
  }
  else if (category === 'village') {
    playersWithRoles = players.map((player) => {
      let playersNewRole = '';
      let randomNumber = generateRandomNumber(newRoles.length);

      if (newRoles.length === 1) {
        randomNumber = 0;
      }
      playersNewRole = newRoles[randomNumber];
      player.villageRole = playersNewRole;
      newRoles[randomNumber] = '';
      newRoles = newRoles.filter((role) => role !== '');
      return player;
    });
  }
  return playersWithRoles;
};

/**
 * @param {object} conf
 * @param {number} roles
 * @param {number} village
 * @returns bool
 */
export const checkConfiguration = (conf, roles, village) => {
  let configDone = false;
  const { games, playersNumber } = conf;
  if (games.indexOf('Le Village') === -1 && roles === Number(playersNumber)) {
    configDone = true;
  }
  else if (games.indexOf('Le Village') > -1 && (roles === Number(playersNumber) && village === Number(playersNumber))) {
    configDone = true;
  }
  return configDone;
};

/**
 * @param {object} action
 * @param {array} currentArray
 * @returns array
 */
export const saveRole = (action, array) => {
  let currentArray = array;
  const {
    name,
    checked,
    id,
    value,
  } = action;
  if (name === '') {
    if (checked) {
      if (id === 'hidden-roles-list') {
        if (value === '2 Soeurs') {
          for (let i = 1; i <= 2; i++) {
            currentArray.push(value);
          }
        }
        else if (value === '3 Frères') {
          for (let i = 1; i <= 3; i++) {
            currentArray.push(value);
          }
        }
        else {
          currentArray.push(value);
        }
      }
      else {
        currentArray.push(value);
      }
    }
    else if (id === 'hidden-roles-list') {
      if (value === '2 Soeurs') {
        currentArray = currentArray.filter((role) => role !== value);
      }
      else if (value === '3 Frères') {
        currentArray = currentArray.filter((role) => role !== value);
      }
      else {
        currentArray = currentArray.filter((role) => role !== value);
      }
    }
    else {
      currentArray = currentArray.filter((role) => role !== value);
    }
  }
  else if (id === 'hidden-roles-selects') {
    const newArray = currentArray.filter((role) => role !== name);
    for (let i = 1; i <= value; i++) {
      newArray.push(name);
    }
    currentArray = newArray;
  }
  else {
    const newArray = currentArray.filter((role) => role !== name);
    for (let i = 1; i <= value; i++) {
      newArray.push(name);
    }
    currentArray = newArray;
  }
  return currentArray;
};
