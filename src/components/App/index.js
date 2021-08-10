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
import NewMoon from 'src/containers/App/NewMoon';
import Aboutus from 'src/containers/App/Aboutus';
import Mailbox from 'src/containers/App/Mailbox';


import Expansions from 'src/containers/App/Expansions';
import Aboutus from 'src/containers/App/Aboutus';
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
        <Route path="/le-jeu/les-roles" exact component={Roles} />
        <Route path="/le-jeu/les-cartes-nouvelle-lune" exact component={NewMoon} />
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
