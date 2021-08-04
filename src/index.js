import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'src/store';

import App from 'src/components/App';

const rootReactElement = (
  <Provider store={store}>
    <Router>
      {/* Establish a context and a history to the app
      Allowing it to modify directly the url to get to the page you want or to go back
      Which you can't do in SPA  */}
      <App />
    </Router>
  </Provider>
);

const target = document.getElementById('root');
render(rootReactElement, target);
