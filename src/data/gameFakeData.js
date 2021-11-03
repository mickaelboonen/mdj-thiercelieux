/* eslint-disable import/prefer-default-export */
// import chasseur from 'src/assets/pictures/roles/chasseur.png';
// import cupidon from 'src/assets/pictures/roles/cupidon.png';
// import petiteFille from 'src/assets/pictures/roles/petite-fille.png';
// import voyante from 'src/assets/pictures/roles/voyante.png';
// import voleur from 'src/assets/pictures/roles/voleur.png';
// import loupGarou from 'src/assets/pictures/roles/loup-garou.png';
// import simpleVillageois from 'src/assets/pictures/roles/simple-villageois.png';
// import sorciere from 'src/assets/pictures/roles/sorciere.png';

export const gameOrder = [
  {
    name: 'classic',
    values: [
      'Voleur',
      'Ancien',
      'Cupidon',
      'Amoureux',
      'Salvateur',
      'Voyante',
      'Loup-Garou',
      'Sorcière',
    ],
  },
];

export const gameChangedOrder = [
  {
    name: 'classic',
    type: 'order',
    values: [
      'Voleur',
      'Ancien',
      'Cupidon',
      'Amoureux',
      'Salvateur',
      'Voyante',
      'Loup-Garou',
      'Sorcière',
    ],
  },
  {
    name: 'ancient-first',
    type: 'order',
    values: [
      'Ancien',
      'Voleur',
      'Cupidon',
      'Amoureux',
      'Salvateur',
      'Voyante',
      'Loup-Garou',
      'Sorcière',
    ],
  },
  {
    name: 'Vilagers vs Werewolves 9',
    type: 'roles',
    values: [
      'Loup-Garou',
      'Loup-Garou',
      'Loup-Garou',
      'Simple Villageois',
      'Simple Villageois',
      'Simple Villageois',
      'Simple Villageois',
      'Simple Villageois',
      'Simple Villageois',
    ],
  },
  {
    name: 'Classique',
    type: 'roles',
    values: [
      'Loup-Garou',
      'Loup-Garou',
      'Voyante',
      'Simple Villageois',
      'Sorcière',
      'Voleur',
      'Chasseur',
      'Petite-Fille',
      'Cupidon',
    ],
  },
  {
    name: 'selected-cards',
    type: 'cards',
    values: [
    ],
  },
  {
    name: 'seeker-first',
    type: 'order',
    values: [
      'Voyante',
      'Voleur',
      'Ancien',
      'Cupidon',
      'Amoureux',
      'Salvateur',
      'Loup-Garou',
      'Sorcière',
    ],
  },
];

// MODEL POUR LE GAME MIDDLEWARE
const finalPlayer = {
  id: null,
  userId: null,
  name: '',
  hiddenRole: '',
  villageRole: '',
  side: '', // Pour les roles qui changent de coté en cours de partie
  picture: '', // TODO
  canBeKilled: true,
  canVote: true,
  isAlive: true,
  deadTonight: false,
  deathCause: '',
  roleAttributes: {
    // // PROPRIETE THIERCELIEUX
    // inLove: false,
    // seenBySeer: false,
    // savedByWitch: false,
    // deathPotion: false,
    // curePotion: false,
    // lastBulletForHunter: false,
    // isCaptain: false,
    // wasThief: false, // TODO : modifier le jeu pour rajouter l'attribute
    // // PROPRIETE NW MOON
    // hasPower: true,
    // isStupid: false,
    // loveTriangle: false,
    // charmedByPiedPiper: false,
    // protectedByGuard: false,
    // resistOnce: false,
    // // PROPRIETE PERSOS
    // isInfected: false, // anyone
    // canEatTwice: false, // Grand Mechant Loup
    // hasModel: '', // Enfant Sauvage
    // hasTetanus: false, // Loup infecté apr le chevalier
    // isNextToWolf: false, // Montreur d'Ours
    // isInCult: false,
    // isNotInCult: false,
    // // PROPRIETES VILLAGE
    // isJinxed: false,
    // hasBurnt: false,
    // // Comédien ?
  },
  villageAttributes: {
    hasPower: true,
  },
  newMoonAttributes: {
  },
};
