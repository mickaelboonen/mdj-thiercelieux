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
  newStatsArray['Total'] = 0;
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
    newStatsArray['Total'] += stats[key];
    delete newStatsArray[key];
  });
  newStatsArray = Object.entries(newStatsArray);
  return newStatsArray;
};

export const setVillageStats = (keyArray, stats) => {
  let newStatsArray = {};
  keyArray.forEach((key) => {
    if (key === 'farmer') {
      newStatsArray['Le Fermier'] = stats[key];
    }
    else if (key === 'priest') {
      newStatsArray['Le Confesseur'] = stats[key];
    }
    else if (key === 'baker') {
      newStatsArray['Le Boulanger'] = stats[key];
    }
    else if (key === 'mistress') {
      newStatsArray["L'Institutrice"] = stats[key];
    }
    else if (key === 'bartender') {
      newStatsArray['Le Tavernier'] = stats[key];
    }
    else if (key === 'barber') {
      newStatsArray['Le Barbier'] = stats[key];
    }
    else if (key === 'bonesettler') {
      newStatsArray['Le Rebouteux'] = stats[key];
    }
    else if (key === 'lord') {
      newStatsArray['Le Châtelain'] = stats[key];
    }
    else if (key === 'bailiff') {
      newStatsArray['Le Bailli'] = stats[key];
    }
    else if (key === 'vagabond') {
      newStatsArray['Le Vagabond'] = stats[key];
    }
    delete newStatsArray[key];
  });
  newStatsArray = Object.entries(newStatsArray);
  return newStatsArray;
};

export const setVillageSideRolesStats = (keyArray, stats) => {
  let newStatsArray = {};
  let totalRoles = 0;
  keyArray.forEach((key) => {
    if (key === 'hunter') {
      newStatsArray['Le Chasseur'] = stats[key];
      totalRoles += stats[key];
    }
    else if (key === 'little_girl') {
      newStatsArray['La Petite Fille'] = stats[key];
      totalRoles += stats[key];
    }
    else if (key === 'villager') {
      newStatsArray['Le Simple Villageois'] = stats[key];
      totalRoles += stats[key];
    }
    else if (key === 'witch') {
      newStatsArray['La Sorcière'] = stats[key];
      totalRoles += stats[key];
    }
    else if (key === 'seer') {
      newStatsArray['La Voyante'] = stats[key];
      totalRoles += stats[key];
    }
    else if (key === 'ancient') {
      newStatsArray["L'Ancien"] = stats[key];
      totalRoles += stats[key];
    }
    else if (key === 'scapegoat') {
      newStatsArray['Le Bouc Émissaire'] = stats[key];
      totalRoles += stats[key];
    }
    else if (key === 'guard') {
      newStatsArray['Le Salvateur'] = stats[key];
      totalRoles += stats[key];
    }
    else if (key === 'villager_villager') {
      newStatsArray['Le Villageois Villageois'] = stats[key];
      totalRoles += stats[key];
    }
    else if (key === 'two_sisters') {
      newStatsArray['Les Deux Soeurs'] = stats[key];
      totalRoles += stats[key];
    }
    else if (key === 'three_brothers') {
      newStatsArray['Les Trois Frères'] = stats[key];
      totalRoles += stats[key];
    }
    else if (key === 'stuttering_judge') {
      newStatsArray['Le Juge Bègue'] = stats[key];
      totalRoles += stats[key];
    }
    else if (key === 'knight') {
      newStatsArray["Le Chevalier à l'Épée Rouillée"] = stats[key];
      totalRoles += stats[key];
    }
    else if (key === 'fox') {
      newStatsArray['Le Renard'] = stats[key];
      totalRoles += stats[key];
    }
    else if (key === 'bear_tamer') {
      newStatsArray["Le Montreur d'Ours"] = stats[key];
      totalRoles += stats[key];
    }
    else if (key === 'gypsy') {
      newStatsArray['La Gitane'] = stats[key];
      totalRoles += stats[key];
    }
    else if (key === 'raven') {
      newStatsArray['Le Corbeau'] = stats[key];
      totalRoles += stats[key];
    }
    else if (key === 'pyromaniac') {
      newStatsArray['Le Pyromane'] = stats[key];
      totalRoles += stats[key];
    }
    delete newStatsArray[key];
  });
  newStatsArray = Object.entries(newStatsArray);
  newStatsArray.push(['Total', totalRoles]);
  return newStatsArray;
};

export const setWerewolfSideRolesStats = (keyArray, stats) => {
  let newStatsArray = {};
  let totalRoles = 0;
  keyArray.forEach((key) => {
    if (key === 'werewolf') {
      newStatsArray['Le Loup-Garou'] = stats[key];
      totalRoles += stats[key];
    }
    else if (key === 'big_bad_wolf') {
      newStatsArray['Le Grand Méchant Loup'] = stats[key];
      totalRoles += stats[key];
    }
    else if (key === 'father_of_wolves') {
      newStatsArray["L'Infect Père des Loups"] = stats[key];
      totalRoles += stats[key];
    }
    delete newStatsArray[key];
  });
  newStatsArray = Object.entries(newStatsArray);
  newStatsArray.push(['Total', totalRoles]);
  return newStatsArray;
};

export const setSoloSideRolesStats = (keyArray, stats) => {
  let newStatsArray = {};
  let totalRoles = 0;
  keyArray.forEach((key) => {
    if (key === 'pied_piper') {
      newStatsArray['Le Joueur de Flûte'] = stats[key];
      totalRoles += stats[key];
    }
    else if (key === 'angel') {
      newStatsArray["L'Ange"] = stats[key];
      totalRoles += stats[key];
    }
    else if (key === 'white_werewolf') {
      newStatsArray['Le Loup-Garou Blanc'] = stats[key];
      totalRoles += stats[key];
    }
    else if (key === 'sectarian') {
      newStatsArray["L'Abominable Sectaire"] = stats[key];
      totalRoles += stats[key];
    }
    delete newStatsArray[key];
  });
  newStatsArray = Object.entries(newStatsArray);
  newStatsArray.push(['Total', totalRoles]);
  return newStatsArray;
};

export const setAmbiguousSideRolesStats = (keyArray, stats) => {
  let newStatsArray = {};
  let totalRoles = 0;
  keyArray.forEach((key) => {
    if (key === 'thief') {
      newStatsArray['Le Voleur'] = stats[key];
      totalRoles += stats[key];
    }
    else if (key === 'devoted_servant') {
      newStatsArray['La Servante Dévouée'] = stats[key];
      totalRoles += stats[key];
    }
    else if (key === 'actor') {
      newStatsArray['Le Comédien'] = stats[key];
      totalRoles += stats[key];
    }
    else if (key === 'wild_child') {
      newStatsArray["L'Enfant Sauvage"] = stats[key];
      totalRoles += stats[key];
    }
    else if (key === 'dog_wolf') {
      newStatsArray['Le Chien-Loup'] = stats[key];
      totalRoles += stats[key];
    }
    delete newStatsArray[key];
  });
  newStatsArray = Object.entries(newStatsArray);
  newStatsArray.push(['Total', totalRoles]);
  return newStatsArray;
};

export const setOtherRolesStats = (keyArray, stats) => {
  let newStatsArray = {};
  keyArray.forEach((key) => {
    if (key === 'captain') {
      newStatsArray['Le Capitaine'] = stats[key];
    }
    else if (key === 'lover') {
      newStatsArray['Les Amoureux'] = stats[key];
    }
    delete newStatsArray[key];
  });
  newStatsArray = Object.entries(newStatsArray);
  return newStatsArray;
};

export const setChartData = (array, number) => {
  const chartData = array.map((currentArray) => {
    const dataObject = {};
    const trueArrayLength = currentArray.length - 1;
    if (trueArrayLength > 15) {
      dataObject.x = 'Village';
      dataObject.fill = '0066cc';
    }
    else if (trueArrayLength === 3) {
      dataObject.x = 'Loup-Garou';
      dataObject.fill = '8bc1f7';
    }
    else if (trueArrayLength === 4) {
      dataObject.x = 'Solitaire';
      dataObject.fill = '519de9';
    }
    else if (trueArrayLength === 5) {
      dataObject.x = 'Ambigü';
      dataObject.fill = '002f5d';
    }
    dataObject.y = (currentArray[trueArrayLength][1] * 100) / number;
    return dataObject;
  });
  return chartData;
};
