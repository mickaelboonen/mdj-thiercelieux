import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'src/store';
import { persistor } from 'src/store';
import { PersistGate } from 'redux-persist/lib/integration/react';

import App from 'src/containers/App';

const rootReactElement = (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
    {/* Allows the localstorage to persist data from the application.
    As a SPA, a refresh makes you lose all data, connected status, etc
    By opersisting it in the LocalStorage, you don't have to log in again or lose data */}
    <Router>
      {/* Establish a context and a history to the app
      Allowing it to modify directly the url to get to the page you want or to go back
      Which you can't do in SPA  */}
      <App />
    </Router>
    </PersistGate>
  </Provider>
);

const target = document.getElementById('root');
render(rootReactElement, target);
