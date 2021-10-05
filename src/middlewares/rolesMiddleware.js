import axios from 'axios';

import { FETCH_CARDS, saveCards } from 'src/actions/RolesDescriptions';

axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

const rolesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_CARDS: {
      let { currentPage } = action;

      if (currentPage === 'les-roles') {
        currentPage = 'roles';
      }
      else if (currentPage === 'les-cartes-nouvelle-lune') {
        currentPage = 'newmoon';
      }
      else if (currentPage === 'les-villageois') {
        currentPage = 'village';
      }

      api.get(`/api/cards/${currentPage}`)
        .then((response) => {
          store.dispatch(saveCards(response.data, currentPage));
        })
        .catch((error) => {
          console.error('tags request', error);
        });
    }
      break;
    default:
  }
  next(action);
};

export default rolesMiddleware;
