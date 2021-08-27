// import axios from 'axios';

import { SET_GAME, savePlayersFinalArray } from 'src/actions/game';

import { setSide, setAttributes } from 'src/selectors/setGameFunctions';

// axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

// const api = axios.create({
//   baseURL: 'http://localhost:3001',
// });

// api.defaults.headers.common['Authorization'] = 'OurSuperLongRandomSecretToSignOurJWTgre5ezg4jyt5j4ui64gn56bd4sfs5qe4erg5t5yjh46yu6knsw4q';
// console.log(api.defaults);

const gameMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SET_GAME: {
      // api.get('/recipes')
      //   .then((response) => {
      //     console.log(response);
      //   })
      //   .catch((error) => {
      //     console.error('tags request', error);
      //   });
      const {
        configuration: {
          configuration,
          players,
        },
      } = store.getState();
      // requete Cartes Nouvelle Lune si besoin

      const newPlayersArray = players.map((player) => {
        const finalPlayer = {
          id: null,
          name: '',
          hiddenRole: '',
          villageRole: '',
          side: '', // Pour les roles qui changent de coté en cours de partie
          canBeKilled: true,
          canVote: true,
          roleAttributes: {
            firstnight_call: false,
            // PROPRIETE THIERCELIEUX
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
            canEatTwice: false, // Grand Mechant Loup
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
            hasPower: true,
  
          },
          newMoonAttributes: {
  
          },
        };
        // GENERAL ATTRIBUTIONS-------------------------------
        const {
          id,
          name,
          hiddenRole,
          villageRole,
        } = player;
        finalPlayer.id = id;
        finalPlayer.name = name;
        finalPlayer.hiddenRole = hiddenRole;
        finalPlayer.side = setSide(hiddenRole);
        finalPlayer.villageRole = villageRole;

        const { games } = configuration;

        if (games.indexOf('Le Village') === -1) {
          delete finalPlayer.villageAttributes;
        }
        else if (games.indexOf('Nouvelle Lune') === -1) {
          delete finalPlayer.newMoonAttributes;
        }

        // SPECIFIC ATTRIBUTIONS
        const att = setAttributes(hiddenRole);

        if (att !== undefined) {
          att.forEach((currentAtt) => {
            finalPlayer.roleAttributes[currentAtt] = true;
            // finalPlayer.roleAttributes.deathPotion = true; (si sorcière)
            // finalPlayer.roleAttributes.curePotion = true; (si sorcière)
          });
        }
        return finalPlayer;
      });
      store.dispatch(savePlayersFinalArray(newPlayersArray));
    }
      break;
    default:
  }
  next(action);
};

export default gameMiddleware;
