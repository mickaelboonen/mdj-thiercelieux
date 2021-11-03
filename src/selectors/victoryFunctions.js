/* eslint-disable import/prefer-default-export */

export const setStatWin = (player, winner) => {
  let winAttribute = '';
  if (player.isAlive && winner === 'Village') {
    winAttribute = 'won_as_village';
  }
  else if (player.isAlive && winner === 'Loup-Garou') {
    winAttribute = 'won_as_werewolf';
  }
  else if (player.isAlive && winner === 'Solitaire') {
    winAttribute = 'won_as_solo';
  }
  else if (player.isAlive && winner === 'Amoureux') {
    winAttribute = 'won_as_lovers';
  }
  return winAttribute;
};
export const setStatRole = (player) => {
  let englishRole = '';
  if (player.side === 'Village') {
    // TODO : roles to add
    if (player.hiddenRole === 'Sorcière') {
      englishRole = 'witch';
    }
    else if (player.hiddenRole === 'Chasseur') {
      englishRole = 'hunter';
    }
    else if (player.hiddenRole === 'Cupidon') {
      englishRole = 'Cupid';
    }
    else if (player.hiddenRole === 'Petite Fille') {
      englishRole = 'little_girl';
    }
    else if (player.hiddenRole === 'Simple Villageois') {
      englishRole = 'villager';
    }
    else if (player.hiddenRole === 'Voleur') {
      englishRole = 'thief';
    }
    else if (player.hiddenRole === 'Voyante') {
      englishRole = 'seer';
    }
  }
  else if (player.side === 'Loup-Garou') {
    // all werewolves roles done
    if (player.hiddenRole === 'Loup-Garou') {
      englishRole = 'werewolf';
    }
    else if (player.hiddenRole === 'Chien-Loup') {
      englishRole = 'dog_wolf';
    }
    else if (player.hiddenRole === 'Grand Méchant Loup') {
      englishRole = 'big_bad_wolf';
    }
    else if (player.hiddenRole === 'Infect Père des Loups') {
      englishRole = 'father_of_wolves';
    }
    else if (player.hiddenRole === 'Enfant Sauvage') {
      englishRole = 'wild_chid';
    }
  }
  else if (player.side === 'Solitaire') {
    // all solo roles done
    if (player.hiddenRole === 'Ange') {
      englishRole = 'angel';
    }
    else if (player.hiddenRole === 'Abominable Sectaire') {
      englishRole = 'sectarian';
    }
    else if (player.hiddenRole === 'Joueur de Flute') {
      englishRole = 'pied_piper';
    }
    else if (player.hiddenRole === 'Loup-Garou Blanc') {
      englishRole = 'white_werewolf';
    }
  }
  return englishRole;
};
export const setStatVillageRole = (player) => {
  let villageRole = '';
  if (player.villageRole === 'Fermier') {
    villageRole = 'farmer';
  }
  else if (player.villageRole === 'Prêtre') {
    villageRole = 'priest';
  }
  else if (player.villageRole === 'Boulanger') {
    villageRole = 'baker';
  }
  else if (player.villageRole === 'Institutrice') {
    villageRole = 'mistress';
  }
  else if (player.villageRole === 'Tavernier') {
    villageRole = 'bartender';
  }
  else if (player.villageRole === 'Barbier') {
    villageRole = 'barber';
  }
  else if (player.villageRole === 'Rebouteux') {
    villageRole = 'bonesettle';
  }
  else if (player.villageRole === 'Châtelain') {
    villageRole = 'lord';
  }
  else if (player.villageRole === 'Bailli') {
    villageRole = 'bailiff';
  }
  else if (player.villageRole === 'Vagabond') {
    villageRole = 'vagabond';
  }
  return villageRole;
};

// export const setStatLover = (players, newPlayers) => {
//   const newPlayersArray = newPlayers.map((newPlayer) => {
//     const currentPlayer = players.find((player) => player.userId === newPlayer.userId);
//     if (currentPlayer.roleAttributes.inLove) {
//       newPlayer.lover = 'lover';
//     }
//     return newPlayer;
//   });
//   return newPlayersArray;
// };
// export const cleanArray = (newPlayers) => {
//   const newPlayersArray = newPlayers.map((newPlayer) => {
//     delete newPlayer.id;
//     delete newPlayer.canBeKilled;
//     delete newPlayer.canVote;
//     delete newPlayer.deadTonight;
//     delete newPlayer.isAlive;
//     delete newPlayer.name;
//     delete newPlayer.roleAttributes;
//     delete newPlayer.picture;
//     delete newPlayer.side;
//     return newPlayer;
//   });
//   return newPlayersArray;
// };
// export const setFinalStats = (players, winner, bool) => {
//   let newArray = [];
//   players.forEach((player) => {
//     newArray.push(player);
//   });
//   if (bool) {
//     newArray = newArray.filter((player) => player.userId !== null);
//   }
//   const playersAfterWin = setWin(players, newArray, winner);
//   const playersAfterRoles = setRoles(players, playersAfterWin);
//   const playersAfterVillage = setVillageRoles(players, playersAfterRoles);
//   let playersAfterLove = wasInLove(players, playersAfterVillage);
//   if (bool) {
//     const cleanPlayersArray = cleanArray(playersAfterLove);
//     playersAfterLove = cleanPlayersArray;
//   }
//   return playersAfterLove;
// };

export const setSidesArray = (array, side) => {
  const newArray = [];
  array.forEach((player) => {
    if (player.side === side) {
      newArray.push(player);
    }
  });
  return newArray;
};

export const setNewStatsForPatchRequest = (player, dbData) => {
  const newUserStatistics = {};

  // Setting the user_id
  newUserStatistics.user_id = player.userId;
  // Setting the number of parties that have been played
  newUserStatistics.played_parties = dbData.played_parties + 1;
  // Setting the role and its new value
  const newRoleProperty = player.role;
  newUserStatistics[newRoleProperty] = dbData[newRoleProperty] + 1;

  // If the user has won, set the won_as_SMTH attribute and its new value
  if (player.win !== undefined && player.win !== '') {
    const newProperty = player.win;
    newUserStatistics[newProperty] = dbData[newProperty] + 1;
  }

  // If the user was a lover, sets the new number of parties played as a lover
  if (player.lover === 'lover') {
    newUserStatistics.lover = dbData.lover + 1;
  }
  // If the user has been killed, sets the death_by_SMO attribute and its new value
  if (player.deathCause !== undefined && player.deathCause !== '') {
    const newProperty = player.deathCause;
    newUserStatistics[newProperty] = dbData[newProperty] + 1;
  }
  // If the was the Thief at the beginning of the game, sets the new number of games played as Thief
  if (player.wasThief) {
    newUserStatistics.thief = dbData.thief + 1;
  }
  return newUserStatistics;
};
