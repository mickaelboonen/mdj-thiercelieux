import axios from 'axios';
import avatar from 'src/assets/pictures/cards/croissant.gif';

import { SAVE_NEW_USER, endRegisterProcess, setRegisterErrorMessage } from 'src/actions/user';

axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

// Methods
// GET, POST, PATCH, PUT, DELETE

const registerMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SAVE_NEW_USER: {
      const newUser = {
        ...action.data,
        avatar: avatar,
      };
      delete newUser.confirmPassword;
      api.post('/register', newUser)
        .then((response) => {
          console.log(response);
          if (response.status === 201) {
            const message = 'Votre compte a été créé avec succès.';

            store.dispatch(endRegisterProcess(message));
          }
          else {
            // TODO toutes les erreurs a gérer
            const errorsArray = [];
            const message = 'Une erreur est survenue pendant la création de votre compte. Veuillez réessayer.'; // erreur type, a voir en fonction des erreurs renvoyées par le back
            errorsArray.push(message);
            // Emain + pseudo uniques !
            store.dispatch(setRegisterErrorMessage(errorsArray));
          }
        })
        .catch((error) => {
          console.error('register request', error);
        });
    }
      break;
    default:
  }
  next(action);
};

export default registerMiddleware;
