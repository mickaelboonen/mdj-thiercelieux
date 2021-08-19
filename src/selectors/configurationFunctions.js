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

export const checkRolesNumber = (role, value, errors) => {
  let message = '';
  let newErrorsArray = errors;
  console.log(value);
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

export const checkTotalRoles = (roles, errors, number, name) => {
  let message = '';
  let newErrorMessageArray = errors;
  if (name === 'hidden') {
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
