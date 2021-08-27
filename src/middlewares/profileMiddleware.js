import axios from 'axios';
import ancien from 'src/assets/pictures/roles/ancien.png';
import ange from 'src/assets/pictures/roles/ange.png';
import chasseur from 'src/assets/pictures/roles/chasseur.png';

import { CHANGE_AVATAR, saveAvatar } from 'src/actions/user';

axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

api.defaults.headers.common['Authorization'] = 'OurSuperLongRandomSecretToSignOurJWTgre5ezg4jyt5j4ui64gn56bd4sfs5qe4erg5t5yjh46yu6knsw4q';

const gameMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case CHANGE_AVATAR: {
      // TODO  on modifiie l'vatar dans la base de données avec l'url qu'on transmet
      // puis on affiche l'avatar
      // ocmme ça pas de gestion en meme temps que le form

      // api.post('/login')
      //   .then((response) => {
      //     console.log(response);
      //     store.dispatch(saveUser(response.data));
      //   })
      //   .catch((error) => {
      //     console.error('login request', error);
      //   });

      // FAKEDATA
      let avatar = '';
      if (action.name === 'ange') {
        avatar = ange;
      }
      else if (action.name === 'ancien') {
        avatar = ancien;
      }
      else if (action.name === 'chasseur') {
        avatar = chasseur;
      }
      console.log(action.name, avatar);
      store.dispatch(saveAvatar(avatar));
    }
      break;
    default:
  }
  next(action);
};

export default gameMiddleware;
