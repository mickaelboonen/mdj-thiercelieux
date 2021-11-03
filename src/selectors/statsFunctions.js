export const setWinningStats = (keyArray, stats) => {
  let newStatsArray = {};
  keyArray.forEach((key) => {
    if (key === 'won_as_village') {
      newStatsArray['Camp des Villageois'] = stats[key];
    }
    else if (key === 'won_as_werewolf') {
      newStatsArray['Camp des Loups-Garous'] = stats[key];
    }
    else if (key === 'won_as_lovers') {
      newStatsArray['En Amoureux'] = stats[key];
    }
    else if (key === 'won_as_solo') {
      newStatsArray['En solitaire'] = stats[key];
    }
    else if (key === 'won_parties') {
      newStatsArray['Total'] = stats[key];
    }
    delete newStatsArray[key];
  });
  newStatsArray = Object.entries(newStatsArray);
  return newStatsArray;
};

export const setDeathStats = (keyArray, stats) => {
  let newStatsArray = {};
  keyArray.forEach((key) => {
    if (key === 'death_by_vote') {
      newStatsArray['Condamné à la potence'] = stats[key];
    }
    else if (key === 'death_by_werewolf') {
      newStatsArray['Dévoré par les Loups-Garous'] = stats[key];
    }
    else if (key === 'death_by_hunter') {
      newStatsArray['Victime du Chasseur'] = stats[key];
    }
    else if (key === 'death_by_love') {
      newStatsArray['Mort par amour'] = stats[key];
    }
    else if (key === 'death_by_knight') {
      newStatsArray["Victime de l'épée rouillée du Chevalieur"] = stats[key];
    }
    else if (key === 'death_by_witch') {
      newStatsArray['Empoisonné par la Sorcière'] = stats[key];
    }
    else if (key === 'death_by_fire') {
      newStatsArray['Brûlé vif par le Pyromane'] = stats[key];
    }
    else if (key === 'death_by_barber') {
      newStatsArray['Assassiné par le Barbier'] = stats[key];
    }
    delete newStatsArray[key];
  });
  newStatsArray = Object.entries(newStatsArray);
  return newStatsArray;
};
