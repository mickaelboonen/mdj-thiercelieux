import { SET_GAME } from 'src/actions/game';

const gameMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SET_GAME: {
      const {
        configuration: {
          configuration,
          players,
        },
      } = store.getState();
      console.log(players, configuration);
      // requete Cartes Nouvelle Lune si besoin

      const player = {
        id: 1,
        name: 'Player1',
        nighttime_role: 'Loup-Garou',
        daytime_role: '',
        side: '', // Pour les roles qui changent de coté en cours de partie
        roleAttributes: {
          firstnight_power: false,
          // PROPRIETE THIERCELIEUX
          canVote: true,
          isAlive: true,
          deadTonight: false,
          inLove: false,
          seenBySeer: false,
          savedByWitch: false,
          deathPotion: false,
          curePotion: false,
          lastBulletForHunter: false,
          isCaptain: false,
          // Voleur ?
          // PROPRIETE NW MOON
          hasPower: true,
          isStupid: false,
          loveTriangle: false,
          charmedByPiedPiper: false,
          protectedByGuard: false,
          resistOnce: false,
          // PROPRIETE PERSOS
          isInfected: false, // anyone
          canEatTwice: true, // Grand Mechant Loup
          hasModel: '', // Enfant Sauvage
          hasTetanus: false, // Loup infecté apr le chevalier
          isNextToWolf: false, // Montreur d'Ours
          isInCult: false,
          isNotInCult: false,
          // PROPRIETES VILLAGE
          isJinxed: false,
          hasBurnt: false,
          // Comédien ?
        },
        villageAttributes: {

        },
        newMoonAttributes: {

        },
      };
    }
      break;
    default:
  }
  next(action);
};

export default gameMiddleware;
