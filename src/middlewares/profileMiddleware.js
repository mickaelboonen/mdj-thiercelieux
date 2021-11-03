import axios from 'axios';

import {
  CHANGE_AVATAR,
  saveAvatar,
  FETCH_AVATARS,
  saveAvatarsList,
} from 'src/actions/user';

axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

// api.defaults.headers.common['Authorization'] = 'OurSuperLongRandomSecretToSignOurJWTgre5ezg4jyt5j4ui64gn56bd4sfs5qe4erg5t5yjh46yu6knsw4q';

const gameMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case CHANGE_AVATAR: {
      const { user: { avatars } } = store.getState();
      const { image } = avatars.find((avatar) => action.name === avatar.name);
      // Envoie de la variable image dans la requete
      // api.post('/login')
      //   .then((response) => {
      //     console.log(response);
      //     store.dispatch(saveUser(response.data));
      //   })
      //   .catch((error) => {
      //     console.error('login request', error);
      //   });

      store.dispatch(saveAvatar(image));
    }
      break;
    case FETCH_AVATARS: {
      // api.get('/login')
      //   .then((response) => {
      //     console.log(response);
      //     store.dispatch(saveUser(response.data));
      //   })
      //   .catch((error) => {
      //     console.error('login request', error);
      //   });
      const { app: { hiddenRoles } } = store.getState();
      const avatars = hiddenRoles.map((role) => role.avatar);
      store.dispatch(saveAvatarsList(avatars));
      break;
    }
    default:
  }
  next(action);
};

export default gameMiddleware;
