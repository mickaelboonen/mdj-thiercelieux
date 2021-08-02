// == Import : npm
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// == Import : local
// Composants
import App from 'src/components/App';

const rootReactElement = (
  <Router>
    {/* Establish a context and a history to the app
    Allowing it to modify directly the url to get to the page you want or to go back
    Which you can't do in SPA  */}
    <App />
  </Router>
);

const target = document.getElementById('root');
render(rootReactElement, target);
