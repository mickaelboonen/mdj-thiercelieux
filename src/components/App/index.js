// == Import npm
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import { users } from 'src/data/users';

import Header from 'src/components/App/Header';
import Home from 'src/components/App/Home';
import Footer from 'src/components/App/Footer';

import Game from 'src/containers/App/Expansions/Game';
import Specificity from 'src/containers/App/Expansions/Specificity';

import RolesDescriptions from 'src/containers/App/RolesDescriptions';
import Aboutus from 'src/containers/App/Aboutus';
import Mailbox from 'src/containers/App/Mailbox';
import Expansions from 'src/containers/App/Expansions';
import MessagePrive from 'src/containers/App/Mailbox/MessagePrive';
import Configuration from 'src/containers/App/Configuration';

import ProfileUser from './ProfileUser';

// Free comment

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <main>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/le-jeu/:slug" exact component={RolesDescriptions} />
        <Route path="/configurer-ma-partie" component={Configuration} />
        <Route path="/les-jeux">
          <Switch>
            <Route path="/les-jeux/:slug" exact component={Game} />
            <Route path="/les-jeux/:slug/:slug" exact component={Specificity} />
            <Route component={Expansions} />
          </Switch>
        </Route>
        <Route path="/profil" exact component={ProfileUser} />
        <Route path="/ma-messagerie" exact component={Mailbox} />
        <Route path="/ma-messagerie/:id" exact component={MessagePrive} />
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
