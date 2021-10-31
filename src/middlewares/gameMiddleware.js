/* eslint-disable max-len */
/* eslint-disable no-lone-blocks */
import axios from 'axios';

import {
  SET_GAME,
  // NAME TO CHANGE
  PREPARE_FOR_PATCH,
  savePlayersFinalArray,
  updateStats,
  UPDATE_STATS,
  endPatchRequest,
  setRequestsProgressionBar,
} from 'src/actions/game';

import { setSide, setAttributes } from 'src/selectors/setGameFunctions';

import { setNewStatsForPatchRequest } from 'src/selectors/victoryFunctions';

// axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

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
    case PREPARE_FOR_PATCH: {
      const usersStats = [];
      const { game: { finalStats } } = store.getState();
      finalStats.forEach((user) => {
        api.get(`/api/stats/user/${user.userId}`)
          .then((response) => {
            // Creating a new user object with new attributes and new values from the request response
            const newUserStatistics = setNewStatsForPatchRequest(user, response.data);
            // Pushing the request response (a user's stats) into the userStats array
            usersStats.push(newUserStatistics);

            // When the new userStats array has the same length as the finalStats array
            // It means we have all of the data ready for the patch request
            if (finalStats.length === usersStats.length) {
              // So we dispatch the updateStats action
              store.dispatch(updateStats(usersStats));
            }
          })
          .catch((error) => {
            console.error('patch request', error);
          });
      });
    }
      break;
    case UPDATE_STATS: {
      const { stats } = action;
      const { game: { isPatchDone } } = store.getState();
      let requestsNumber = 0;
      // If the isPatchDone is true; we're not doing anything
      // For it means the patch request have already been done
      if (!isPatchDone) {
        stats.forEach((currentStat) => {
          api.patch(`/api/stats/user/${currentStat.user_id}`, { currentStat })
            .then((response) => {
              requestsNumber += 1;

              const percent = (requestsNumber / stats.length) * 100;

              store.dispatch(setRequestsProgressionBar(percent));
              // When all requests have been done, we end the patch process
              if (requestsNumber === stats.length) {
                store.dispatch(endPatchRequest(response.data));
              }
            })
            .catch((error) => {
              console.error('update stats error', error);
              // TODO
            });
        });
      }
    }
      break;
    default:
  }
  next(action);
};

export default gameMiddleware;
