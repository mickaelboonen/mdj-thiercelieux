/* eslint-disable no-lone-blocks */
import axios from 'axios';

import { SET_GAME, PATCH, savePlayersFinalArray } from 'src/actions/game';

import { setSide, setAttributes } from 'src/selectors/setGameFunctions';

axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

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
          isAlive: true,
          deadTonight: false,
          causeOfDeath: '',
          roleAttributes: {
            firstnight_call: false,
            // PROPRIETE THIERCELIEUX
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
    case PATCH: {
      const usersStats = [];
      action.statsArray.forEach((user) => {
        api.get(`/api/stats/user/${user.userId}`)
          .then((response) => {
            usersStats.push(response.data);
            if (usersStats.length === action.statsArray.length) {
              usersStats.forEach((currentUser) => {
              const xxx = action.statsArray.find((player) => player.userId === currentUser.user_id);

                xxx.user_id = xxx.userId;
                delete xxx.userId;
                xxx.played_parties = currentUser.played_parties + 1;

                if (xxx.win !== undefined) {
                  const newProperty = xxx.win;
                  xxx[newProperty] = currentUser[newProperty] + 1;
                  delete xxx.win;
                }
                if (xxx.lover === 'lover') {
                  xxx.lover = currentUser.lover + 1;
                }
                if (xxx.deathCause !== undefined && xxx.deathCause !== '') {
                  const newProperty = xxx.deathCause;
                  xxx[newProperty] = currentUser[newProperty] + 1;
                }
                delete xxx.deathCause;
                const newProperty = xxx.hiddenRole;
                xxx[newProperty] = currentUser[newProperty] + 1;
                delete xxx.hiddenRole;
              // TODO : renvoyer tout ca dans une action qui renvoie ici mais en methode patch pour faire l'update.
              // Ameliorer les noms. COmmenter. 
              // FOnctions qui se fait deux fois, voir pourquoi.
            });
            }
          })
          .catch((error) => {
            console.error('patch request', error);
          });
      })

    }
      break;
    default:
  }
  next(action);
};

export default gameMiddleware;
