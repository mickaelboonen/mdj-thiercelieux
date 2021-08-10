// == Import npm
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import { users } from 'src/data/users';

import Header from 'src/components/App/Header';
import Home from 'src/components/App/Home';
import Footer from 'src/components/App/Footer';

import Roles from 'src/containers/App/Roles';
import Aboutus from 'src/containers/App/Aboutus';
import Mailbox from 'src/containers/App/Mailbox';

import ProfileUser from './ProfileUser';



// == Composant
const App = () => (
  <div className="app">
    <Header />
    <main>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/le-jeu/les-roles" exact>
          <Roles />
        </Route>
        <Route path="/profil" exact>
          <ProfileUser />
        </Route>
        <Route path="/ma-messagerie" exact>
          <Mailbox />
        </Route>
        <Route path="/qui-sommes-nous" exact>
          <Aboutus />
        </Route>
      </Switch>
    </main>
    <Footer />
  </div>
);

// == Export
export default App;
