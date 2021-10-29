import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Request = ({ finalStats, winner }) => {
  console.log('request comp', finalStats);

  const newStatsArray = [];
  finalStats.forEach((stat) => {
    newStatsArray.push(stat);
  });
  console.log('post foreach', newStatsArray);

// -----------------------------------------------------------------------------------------------------------------------
  const setWin = (players, newPlayers, currentWinner) => {
  const newPlayersArray = newPlayers.map((newPlayer) => {
    const currentPlayer = players.find((player) => player.userId === newPlayer.userId);
    if (currentPlayer.side === currentWinner && currentPlayer.isAlive && currentWinner === 'Village') {
      newPlayer.win = 'won_as_village';
    }
    else if (currentPlayer.side === currentWinner && currentPlayer.isAlive && currentWinner === 'Loup-Garou') {
      newPlayer.win = 'won_as_werewolf';
    }
    else if (currentPlayer.side === currentWinner && currentPlayer.isAlive && currentWinner === 'Solitaire') {
      newPlayer.win = 'won_as_solo';
    }
    else if (currentPlayer.side === currentWinner && currentPlayer.isAlive && currentWinner === 'Amoureux') {
      newPlayer.win = 'won_as_lovers';
    }
    return newPlayer;
  });

  return newPlayersArray;
  };
  const setRoles = (players, newPlayers) => {
  const newPlayersArray = newPlayers.map((newPlayer) => {
    const currentPlayer = players.find((player) => player.userId === newPlayer.userId);
    if (currentPlayer.side === 'Village') {
      // TODO : roles to add
      if (currentPlayer.hiddenRole === 'Sorcière') {
        newPlayer.role = 'witch';
      }
      else if (currentPlayer.hiddenRole === 'Chasseur') {
        newPlayer.role = 'hunter';
      }
      else if (currentPlayer.hiddenRole === 'Cupidon') {
        newPlayer.role = 'Cupid';
      }
      else if (currentPlayer.hiddenRole === 'Petite Fille') {
        newPlayer.role = 'little_girl';
      }
      else if (currentPlayer.hiddenRole === 'Simple Villageois') {
        newPlayer.role = 'villager';
      }
      else if (currentPlayer.hiddenRole === 'Voleur') {
        newPlayer.role = 'thief';
      }
      else if (currentPlayer.hiddenRole === 'Voyante') {
        newPlayer.role = 'seer';
      }
    }
    else if (currentPlayer.side === 'Loup-Garou') {
      // all werewolves roles done
      if (currentPlayer.hiddenRole === 'Loup-Garou') {
        newPlayer.role = 'werewolf';
      }
      else if (currentPlayer.hiddenRole === 'Chien-Loup') {
        newPlayer.role = 'dog_wolf';
      }
      else if (currentPlayer.hiddenRole === 'Grand Méchant Loup') {
        newPlayer.role = 'big_bad_wolf';
      }
      else if (currentPlayer.hiddenRole === 'Infect Père des Loups') {
        newPlayer.role = 'father_of_wolves';
      }
      else if (currentPlayer.hiddenRole === 'Enfant Sauvage') {
        newPlayer.role = 'wild_chid';
      }
    }
    else if (currentPlayer.side === 'Solitaire') {
      // all solo roles done
      if (currentPlayer.hiddenRole === 'Ange') {
        newPlayer.role = 'angel';
      }
      else if (currentPlayer.hiddenRole === 'Abominable Sectaire') {
        newPlayer.role = 'sectarian';
      }
      else if (currentPlayer.hiddenRole === 'Joueur de Flute') {
        newPlayer.role = 'pied_piper';
      }
      else if (currentPlayer.hiddenRole === 'Loup-Garou Blanc') {
        newPlayer.role = 'white_werewolf';
      }
    }
    return newPlayer;
  });
  return newPlayersArray;
  };
  const setVillageRoles = (players, newPlayers) => {
  const newPlayersArray = newPlayers.map((newPlayer) => {
    const currentPlayer = players.find((player) => player.userId === newPlayer.userId);
    if (currentPlayer.villageRole === '') {
      delete newPlayer.villageRole;
    }
    else if (currentPlayer.villageRole === 'Fermier') {
      newPlayer.villageRole = 'farmer';
    }
    else if (currentPlayer.villageRole === 'Prêtre') {
      newPlayer.villageRole = 'priest';
    }
    else if (currentPlayer.villageRole === 'Boulanger') {
      newPlayer.villageRole = 'baker';
    }
    else if (currentPlayer.villageRole === 'Infirmière') {
      newPlayer.villageRole = 'mistress';
    }
    else if (currentPlayer.villageRole === 'Tavernier') {
      newPlayer.villageRole = 'bartender';
    }
    else if (currentPlayer.villageRole === 'Barbier') {
      newPlayer.villageRole = 'barber';
    }
    else if (currentPlayer.villageRole === 'Rebouteux') {
      newPlayer.villageRole = 'bonesettle';
    }
    else if (currentPlayer.villageRole === 'Châtelain') {
      newPlayer.villageRole = 'lord';
    }
    else if (currentPlayer.villageRole === 'Bailli') {
      newPlayer.villageRole = 'bailiff';
    }
    else if (currentPlayer.villageRole === 'Vagabond') {
      newPlayer.villageRole = 'vagabond';
    }
    return newPlayer;
  });
  return newPlayersArray;
  };
  const wasInLove = (players, newPlayers) => {
  const newPlayersArray = newPlayers.map((newPlayer) => {
    const currentPlayer = players.find((player) => player.userId === newPlayer.userId);
    if (currentPlayer.roleAttributes.inLove) {
      newPlayer.lover = 'lover';
    }
    return newPlayer;
  });
  return newPlayersArray;
  };
  const cleanArray = (newPlayers) => {
  const newPlayersArray = newPlayers.map((newPlayer) => {
    delete newPlayer.id;
    delete newPlayer.canBeKilled;
    delete newPlayer.canVote;
    delete newPlayer.deadTonight;
    delete newPlayer.isAlive;
    delete newPlayer.name;
    delete newPlayer.roleAttributes;
    delete newPlayer.picture;
    delete newPlayer.side;
    return newPlayer;
  });
  return newPlayersArray;
  };

  const setFinalStats = (players, side) => {
    const newArray = [];
    players.forEach((player) => {
      newArray.push(player);
    });
    const newPlayers = newArray.filter((player) => player.userId !== null);
    const playersAfterWin = setWin(players, newPlayers, side);
    const playersAfterRoles = setRoles(players, playersAfterWin);
    const playersAfterVillage = setVillageRoles(players, playersAfterRoles);
    const playersAfterLove = wasInLove(players, playersAfterVillage);
    const cleanPlayersArray = cleanArray(playersAfterLove);
    return cleanPlayersArray;
  };

// ---------------------------------------------------------------------------------------
  const lol = setFinalStats(finalStats, winner);
  return (
    <div>Request</div>
  );
};

Request.propTypes = {

};

export default Request;
