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
  if (role === 'Sorcière') {
    attributesArray.push('deathPotion', 'curePotion');
  }
  else if (role === 'Chasseur') {
    attributesArray.push('lastBulletForHunter');
  }
  else if (role === 'Cupidon'
  || role === 'Voleur'
  || role === 'Enfant Sauvage'
  || role === 'Chien-Loup'
  || role === 'Comédien'
  || role === 'Juge Bègue'
  || role === '2 Soeurs'
  || role === '3 Frères') {
    attributesArray.push('firstnight_call');
  }
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
