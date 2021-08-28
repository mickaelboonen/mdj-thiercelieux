import axios from 'axios';

import { LOGIN, saveUser } from 'src/actions/user';

axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

api.defaults.headers.common['Authorization'] = 'OurSuperLongRandomSecretToSignOurJWTgre5ezg4jyt5j4ui64gn56bd4sfs5qe4erg5t5yjh46yu6knsw4q';

const gameMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      // api.post('/login')
      //   .then((response) => {
      //     console.log(response);
      //     store.dispatch(saveUser(response.data));
      //   })
      //   .catch((error) => {
      //     console.error('login request', error);
      //   });
      // FAKEDATA
      const user = {
        pseudo: 'Carlos',
        token: '12345',
        email: 'carloseatsnash@powerbotton.com',
        avatar: '',
        preferences: [],
        creations: [],
        statistics: [],
        favoriteRole: 'Loup-Garou Blanc',
      };
      store.dispatch(saveUser(user));
    }
      break;
    default:
  }
  next(action);
};

export default gameMiddleware;
