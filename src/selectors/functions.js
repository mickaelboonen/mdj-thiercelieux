// eslint-disable-next-line import/prefer-default-export
export const chooseDeterminer = (name) => {
  let determiner = '';
  if (
    name === 'Chasseur'
    || name === 'Loup-Garou'
    || name === 'Simple Villageois'
    || name === 'Voleur'
    || name === 'Bouc Émissaire'
    || name === 'Joueur de Flute'
    || name === 'Salvateur'
    || name === "Chevalier à l'Épée Rouillée"
    || name === 'Chien-Loup'
    || name === 'Comédien'
    || name === 'Grand Méchant Loup'
    || name === 'Juge Bègue'
    || name === "Montreur d'Ours"
    || name === 'Renard'
    || name === 'Villageois Villageois'
    || name === 'Corbeau'
    || name === 'Loup Garou Blanc'
    || name === 'Pyromane'
  ) {
    determiner = 'le ';
  }
  else if (
    name === 'Ancien'
    || name === 'Idiot du Village'
    || name === 'Abominable Sectaire'
    || name === 'Ange'
    || name === 'Enfant Sauvage'
    || name === 'Infect Père des Loups'
    || name === 'Ancien'
    || name === 'Ancien'
    || name === 'Ancien'
    || name === 'Ancien'
    || name === 'Ancien'
    || name === 'Ancien'
    || name === 'Ancien'
  ) {
    determiner = "l'";
  }
  else if (
    name === 'Petite Fille'
    || name === 'Sorcière'
    || name === 'Voyante'
    || name === 'Servante Dévouée'
    || name === 'Voyante'
    || name === 'Voyante'
    || name === 'Voyante'
    || name === 'Voyante'
    || name === 'Voyante'
    || name === 'Voyante'
    || name === 'Voyante'
    || name === 'Voyante'
    || name === 'Voyante'
    || name === 'Voyante'
  ) {
    determiner = 'la ';
  }
  else if (name === '3 Frères' || name === '2 Soeurs') {
    determiner = 'les ';
  }
  else if (name === 'Cupidon' || name === 'La Gitane (sans Philtre)') {
    determiner = '';
  }
  return determiner;
};
