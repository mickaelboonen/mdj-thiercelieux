import axios from 'axios';

import { ADD_NEW_MESSAGE } from 'src/actions/mailbox';

axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

// Methods
// GET, POST, PATCH, PUT, DELETE

const mailboxMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case ADD_NEW_MESSAGE:
      api.post('/api/mailbox', action.data)
        .then((response) => {
          console.log(response);
          // if (response.status === 201) {
          //   const message = 'Votre compte a été créé avec succès.';

          //   // store.dispatch(endRegisterProcess(message));
          // }
          // else {
          //   // TODO toutes les erreurs a gérer
          //   const errorsArray = [];
          //   const message = 'Une erreur est survenue pendant la création de votre compte. Veuillez réessayer.'; // erreur type, a voir en fonction des erreurs renvoyées par le back
          //   errorsArray.push(message);
          //   // Emain + pseudo uniques !
          //   store.dispatch(setRegisterErrorMessage(errorsArray));
          // }
        })
        .catch((error) => {
          console.error('register request', error);
        });
      break;
    default:
  }
  next(action);
};

export default mailboxMiddleware;
