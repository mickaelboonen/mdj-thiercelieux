// == Import npm
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import { users } from 'src/data/users';

import Header from 'src/components/App/Header';
import Home from 'src/components/App/Home';
import Footer from 'src/components/App/Footer';
import ProfileUser from './ProfileUser';
import Mailbox from './ProfileUser/Mailbox';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <main>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/profil" exact>
          <ProfileUser />
        </Route>
        <Route path="/ma-messagerie" exact>
          <Mailbox />
        </Route>
      </Switch>
    </main>
    <Footer />
  </div>
);

// == Export
export default App;
