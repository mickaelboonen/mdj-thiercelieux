/* eslint-disable import/prefer-default-export */

const setWin = (players, winner) => {
  const newPlayerArray = players.map((player) => {
    if (player.side === winner && player.isAlive && winner === 'Village') {
      player.win = 'won_as_village';
    }
    else if (player.side === winner && player.isAlive && winner === 'Loup-Garou') {
      player.win = 'won_as_werewolf';
    }
    else if (player.side === winner && player.isAlive && winner === 'Solitaire') {
      player.win = 'won_as_solo';
    }
    else if (player.side === winner && player.isAlive && winner === 'Amoureux') {
      player.win = 'won_as_lovers';
    }
    return player;
  });
  return newPlayerArray;
};
const setRoles = (players) => {
  const newPlayerArray = players.map((player) => {
    if (player.side === 'Village') {
      // TODO : roles to add
      if (player.hiddenRole === 'Sorcière') {
        player.hiddenRole = 'witch';
      }
      else if (player.hiddenRole === 'Chasseur') {
        player.hiddenRole = 'hunter';
      }
      else if (player.hiddenRole === 'Cupidon') {
        player.hiddenRole = 'Cupid';
      }
      else if (player.hiddenRole === 'Petite Fille') {
        player.hiddenRole = 'little_girl';
      }
      else if (player.hiddenRole === 'Simple Villageois') {
        player.hiddenRole = 'villager';
      }
      else if (player.hiddenRole === 'Voleur') {
        player.hiddenRole = 'thief';
      }
      else if (player.hiddenRole === 'Voyante') {
        player.hiddenRole = 'seer';
      }
    }
    else if (player.side === 'Loup-Garou') {
      // all werewolves roles done
      if (player.hiddenRole === 'Loup-Garou') {
        player.hiddenRole = 'werewolf';
      }
      else if (player.hiddenRole === 'Chien-Loup') {
        player.hiddenRole = 'dog_wolf';
      }
      else if (player.hiddenRole === 'Grand Méchant Loup') {
        player.hiddenRole = 'big_bad_wolf';
      }
      else if (player.hiddenRole === 'Infect Père des Loups') {
        player.hiddenRole = 'father_of_wolves';
      }
      else if (player.hiddenRole === 'Enfant Sauvage') {
        player.hiddenRole = 'wild_chid';
      }
    }
    else if (player.side === 'Solitaire') {
      // all solo roles done
      if (player.hiddenRole === 'Ange') {
        player.hiddenRole = 'angel';
      }
      else if (player.hiddenRole === 'Abominable Sectaire') {
        player.hiddenRole = 'sectarian';
      }
      else if (player.hiddenRole === 'Joueur de Flute') {
        player.hiddenRole = 'pied_piper';
      }
      else if (player.hiddenRole === 'Loup-Garou Blanc') {
        player.hiddenRole = 'white_werewolf';
      }
    }
    return player;
  });
  return newPlayerArray;
};
const setVillageRoles = (players) => {
  const newPlayerArray = players.map((player) => {
    if (player.villageRole === '') {
      delete player.villageRole;
    }
    else if (player.villageRole === 'Fermier') {
      player.villageRole = 'farmer';
    }
    else if (player.villageRole === 'Prêtre') {
      player.villageRole = 'priest';
    }
    else if (player.villageRole === 'Boulanger') {
      player.villageRole = 'baker';
    }
    else if (player.villageRole === 'Infirmière') {
      player.villageRole = 'mistress';
    }
    else if (player.villageRole === 'Tavernier') {
      player.villageRole = 'bartender';
    }
    else if (player.villageRole === 'Barbier') {
      player.villageRole = 'barber';
    }
    else if (player.villageRole === 'Rebouteux') {
      player.villageRole = 'bonesettle';
    }
    else if (player.villageRole === 'Châtelain') {
      player.villageRole = 'lord';
    }
    else if (player.villageRole === 'Bailli') {
      player.villageRole = 'bailiff';
    }
    else if (player.villageRole === 'Vagabond') {
      player.villageRole = 'vagabond';
    }
    return player;
  });
  return newPlayerArray;
};
const wasInLove = (players) => {
  const newPlayerArray = players.map((player) => {
    if (player.roleAttributes.inLove) {
      player.lover = 'lover';
    }
    return player;
  });
  return newPlayerArray;
};
const cleanArray = (players) => {
  const newArray = players.map((player) => {
    delete player.id;
    delete player.canBeKilled;
    delete player.canVote;
    delete player.deadTonight;
    delete player.isAlive;
    delete player.name;
    // delete player.roleAttributes;
    delete player.picture;
    delete player.side;
    return player;
  });
  return newArray;
};
export const setFinalStats = (players, winner) => {
  // TODO : a améliorer
  let newArray = players;
  newArray = newArray.filter((player) => player.userId !== null);
  newArray = setWin(newArray, winner);
  newArray = setRoles(newArray);
  newArray = setVillageRoles(newArray);
  newArray = wasInLove(newArray);
  newArray = cleanArray(newArray);
  return newArray;
};
