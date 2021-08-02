// == Import npm
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from 'src/components/App/Header';
import Home from 'src/components/App/Home';
import Footer from 'src/components/App/Footer';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <main>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </main>
    <Footer />
  </div>
);

// == Export
export default App;
