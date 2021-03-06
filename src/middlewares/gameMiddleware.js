/* eslint-disable max-len */
/* eslint-disable no-lone-blocks */
import axios from 'axios';

import {
  SET_GAME,
  // NAME TO CHANGE
  PREPARE_FOR_PATCH,
  saveGameaArrays,
  updateStats,
  UPDATE_STATS,
  endPatchRequest,
  setRequestsProgressionBar,
} from 'src/actions/game';

import { setSide, setAttributes } from 'src/selectors/setGameFunctions';
import { gameOrder, gameChangedOrder } from 'src/data/gameFakeData';

import { setNewStatsForPatchRequest } from 'src/selectors/victoryFunctions';

// axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

const gameMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SET_GAME: {
      api.get('/api/roles/instructions')
        .then((response) => {
          const {
            configuration: {
              thiefRoles,
              configuration,
              players,
              rolesList,
              allRolesArray,
            },
          } = store.getState();
          const instructionsArray = [];
          instructionsArray.night = [];
          instructionsArray.day = [];
          // Filling the instructions array with day time roles
          for (let i = 0; i < rolesList.length; i += 1) {
            const roleInstructions = response.data.find((role) => role.name === rolesList[i]);
            if (roleInstructions.night_time === 0) {
              instructionsArray.day.push(roleInstructions);
            }
          }
          // Filling the thief Roles array
          const newThiefRolesArray = [];
          response.data.forEach((role) => {
            if (thiefRoles.indexOf(role.name) >= 0) {
              newThiefRolesArray.push(role);
            }
          });

          const selectedOrder = gameChangedOrder.find((order) => order.name === configuration.gameOrder);
          
          // Filling the instructions array with night time roles
          selectedOrder.values.forEach((order) => {
            const currentRole = response.data.find((role) => role.name === order);
            if (rolesList.indexOf(currentRole.name) >= 0) {
              if (currentRole.name !== 'Voleur') {
                instructionsArray.night.push(currentRole);
                if (currentRole.name === 'Cupidon') {
                  instructionsArray.night.push(response.data[32]);
                }
              }
              else if (currentRole.name === 'Voleur' && thiefRoles.indexOf('Voleur') === -1) {
                instructionsArray.night.push(currentRole);
              }
            }
          });
          // TODO : requete Cartes Nouvelle Lune si besoin
          const newPlayersArray = players.map((player) => {
            const finalPlayer = {
              id: null,
              userId: null,
              name: '',
              hiddenRole: '',
              villageRole: '',
              side: '', // Pour les roles qui changent de cot?? en cours de partie
              picture: '', // TODO
              canBeKilled: true,
              canVote: true,
              isAlive: true,
              deadTonight: false,
              deathCause: '',
              roleAttributes: {},
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

            const currentRole = response.data.find((role) => role.name === hiddenRole);
            finalPlayer.picture = currentRole.picture;
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
                if (currentAtt === 'inLove') {
                  finalPlayer.roleAttributes[currentAtt] = false;
                }
                else {
                  finalPlayer.roleAttributes[currentAtt] = true;
                }
              });
            }
            return finalPlayer;
          });
          store.dispatch(saveGameaArrays(newPlayersArray, instructionsArray, newThiefRolesArray));
        })
        .catch((error) => {
          console.error('tags request', error);
        });
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
