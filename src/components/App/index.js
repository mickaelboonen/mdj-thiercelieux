// == Import npm
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import { users } from 'src/data/users';

import Header from 'src/components/App/Header';
import Home from 'src/components/App/Home';
import Footer from 'src/components/App/Footer';

import Game from 'src/containers/App/Expansions/Game';
import Specificity from 'src/containers/App/Expansions/Specificity';

import Roles from 'src/containers/App/Roles';
import Expansions from 'src/containers/App/Expansions';

import ProfileUser from './ProfileUser';
import Mailbox from './ProfileUser/Mailbox';
import Aboutus from './Aboutus';
import Path from '../Path';

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
        <Route path="/les-jeux">
          <Switch>
            <Route path="/les-jeux/:slug" exact component={Game} />
            <Route path="/les-jeux/:slug/:slug" exact component={Specificity} />
            <Route component={Expansions} />
          </Switch>
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
