/**
 * @param {string} role
 * Returns string
 */
export const setSide = (role) => {
  let currentSide = '';

  if (role === 'Loup-Garou'
  || role === 'Grand Méchant Loup'
  || role === 'Infect Père des Loups') {
    currentSide = 'Loup-Garou';
  }
  else if (role === 'Voleur'
  || role === 'Servante Dévouée'
  || role === 'Comédien'
  || role === 'Enfant Sauvage'
  || role === 'Chien-Loup') {
    currentSide = 'Ambigü';
  }

  else if (role === 'Joueur de Flute'
  || role === 'Loup-Garou Blanc'
  || role === 'Ange'
  || role === 'Abominable Sectaire') {
    currentSide = 'Solitaire';
  }
  else {
    currentSide = 'Village';
  }
  return currentSide;
};

export const setAttributes = (role) => {
  const attributesArray = [];
  attributesArray.push('inLove');
  if (role === 'Sorcière') {
    attributesArray.push('deathPotion', 'curePotion');
  }
  else if (role === 'Chasseur') {
    attributesArray.push('lastBulletForHunter');
  }
  else if (role === 'Voleur') {
    attributesArray.push('wasThief');
  }
  // else if (role === 'Cupidon'
  // || role === 'Voleur'
  // || role === 'Enfant Sauvage'
  // || role === 'Chien-Loup'
  // || role === 'Comédien'
  // || role === 'Juge Bègue'
  // || role === '2 Soeurs'
  // || role === '3 Frères') {
  //   attributesArray.push('firstnight_call');
  // }
  else if (role === 'Ancien') {
    attributesArray.push('firstnight_call', 'resistOnce');
  }
  else if (role === 'Idiot du Village') {
    attributesArray.push('isIdiot');
  }
  else if (role === 'Grand Méchant Loup') {
    attributesArray.push('canEatTwice');
  }
  else if (role === 'Abominable Sectaire') {
    attributesArray.push('isInCult');
  }
  else if (role === 'ROLE') {
    attributesArray.push('XXX');
  }
  return attributesArray;
};

export const setChoicesForAction = (role, players, array = []) => {
  let newChoices = players;
  if (role === 'Voleur') {
    newChoices = array;
  }
  else if (role === 'Amoureux') {
    // TODO : dynamiser
    newChoices = [];
  }
  else if (role === 'Voyante' || role === 'Loup-Garou') {
    newChoices = newChoices.filter((player) => player.hiddenRole !== role);
  }
  else if (role === 'Sorcière') {
    const deadPlayer = newChoices.find((player) => !player.isAlive && player.deadTonight);
    const playersToKill = newChoices.filter((player) => player.isAlive && player.hiddenRole !== 'Sorcière');
    playersToKill.unshift(deadPlayer);
  }
  return newChoices;
};

export const setNewAttributesToPlayers = (changes, players, allRolesInstructions) => {
  const { name, values } = changes;
  let newPlayersArray = [];

  if (name === 'Voleur') {
    const [newRole] = values;
    const currentThief = players.find((player) => player.hiddenRole === 'Voleur');
    const otherPlayers = players.filter((player) => player.hiddenRole !== 'Voleur');

    currentThief.hiddenRole = newRole;
    currentThief.side = setSide(newRole);
    console.log(allRolesInstructions);
    const { picture } = allRolesInstructions.find((role) => role.name === newRole);
    currentThief.picture = picture;
    const attributes = setAttributes(newRole);
    if (attributes !== undefined) {
      attributes.forEach((currentAtt) => {
        currentThief.roleAttributes[currentAtt] = true;
      });
    }
    for (let i = 1; i <= players.length; i += 1) {
      const currentPlayer = otherPlayers.find((player) => player.id === i);
      // console.log(currentPlayer);
      if (currentPlayer) {
        newPlayersArray.push(currentPlayer);
      }
      else {
        newPlayersArray.push(currentThief);
      }
    }
  }

  else if (name === 'Cupidon') {
    const [firstLover, secondLover] = values;
    newPlayersArray = players.map((player) => {
      if (player.name === firstLover || player.name === secondLover) {
        player.roleAttributes.inLove = true;
      }
      return player;
    });
  }
  else if (name === 'Loup-Garou') {
    const [victim] = values;
    newPlayersArray = players.map((player) => {
      if (player.name === victim) {
        player.isAlive = false;
        player.deadTonight = true;
        player.deathCause = 'death_by_werewolf';
      }
      return player;
    });
  }
  else if (name === 'Sorcière') {
    newPlayersArray = players;
    const { wolfVictim, witchVictim } = values;
    if (wolfVictim === 'Personne') {
      // TODO : TO BE CHANGED WHEN NEW ROLES WILL KILL IN THE MEAN TIME
      newPlayersArray = players.map((player) => {
        if (!player.isAlive && player.deadTonight) {
          player.isAlive = true;
          player.deadTonight = false;
          player.deathCause = '';
        }
        if (player.hiddenRole === 'Sorcière') {
          player.roleAttributes.curePotion = false;
        }
        return player;
      });
    }
    if (witchVictim !== 'Personne' && witchVictim !== '') {
      newPlayersArray = players.map((player) => {
        if (player.name === witchVictim) {
          player.isAlive = false;
          player.deadTonight = true;
          player.deathCause = 'death_by_witch';
          player.roleAttributes.deadByPotion = true;
        }
        if (player.hiddenRole === 'Sorcière') {
          player.roleAttributes.deathPotion = false;
        }
        return player;
      });
    }
  }
  return newPlayersArray;
};

export const breakingNews = (newspaper, changes) => {
  const morningEdition = newspaper;
  const { name, values } = changes;

  if (name === 'Sorcière') {
    const { wolfVictim, witchVictim } = values;
    if (wolfVictim !== 'Personne' && wolfVictim !== '') {
      morningEdition.push(`${wolfVictim} a été attaqué cette nuit et est décédé de ses blessures.`);
    }
    if (witchVictim !== 'Personne' && witchVictim !== '') {
      morningEdition.push(`${witchVictim} a été attaqué cette nuit et est décédé de ses blessures.`);
    }
  }
  return morningEdition;
};

export const setWinnerStatus = (newspaper, players) => {
  let winner = '';
  const sidesArray = [];
  players.forEach((player) => {
    if (player.isAlive) {
      sidesArray.push(player.side);
    }
  });
  if (sidesArray.length === 2) {
    const areTheyLovers = players.filter((player) => player.roleAttributes.inLove);
    if (areTheyLovers.length === 2) {
      winner = 'Amoureux';
      newspaper.push('Lovers wins');
    }
    else if (sidesArray.indexOf('Loup-Garou') === -1) {
      winner = 'Village';
      newspaper.push('Villages wins');
    }
    else if (sidesArray.indexOf('Village') === -1) {
      winner = 'Loup-Garou';
      newspaper.push('Werewolves win');
    }
  }
  if (sidesArray.indexOf('Loup-Garou') === -1) {
    winner = 'Village';
    newspaper.push('Villages wins');
  }
  else if (sidesArray.indexOf('Village') === -1) {
    winner = 'Loup-Garou';
    newspaper.push('Werewolves win');
  }
  // TODO : Abominable Sectaire, Joueur de Flute, Ange, Loup Garou Blanc
  return winner;
};

export const deleteRoleNotChosen = (chosenName, gameOrder, thiefRoles) => {
  const roleToDelete = thiefRoles.find((role) => role.name !== chosenName);
  const { name } = roleToDelete;
  if (name === 'Loup-Garou') {
    return gameOrder;
  }
  let newGameOrder = gameOrder.filter((role) => role.name !== name);
  if (name === 'Cupidon') {
    newGameOrder = newGameOrder.filter((role) => role.name !== 'Amoureux');
  }
  return newGameOrder;
};
