// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Switch,
  Route,
  Redirect,
  useHistory,
  useLocation,
} from 'react-router-dom';
// import { users } from 'src/data/users';

import Header from 'src/components/App/Header';
import Home from 'src/components/App/Home';
import Footer from 'src/components/App/Footer';

import CurrentGame from 'src/containers/App/CurrentGame';
import Game from 'src/containers/App/Expansions/Game';
import Specificity from 'src/containers/App/Expansions/Specificity';
import RolesDescriptions from 'src/containers/App/RolesDescriptions';
import Aboutus from 'src/containers/App/Aboutus';
import Mailbox from 'src/containers/App/Mailbox';
import Expansions from 'src/containers/App/Expansions';
import MessagePrive from 'src/containers/App/Mailbox/MessagePrive';
import Configuration from 'src/containers/App/Configuration';
import Sunset from 'src/containers/Animations/Sunset';
import Login from 'src/containers/App/Login';
import Register from 'src/containers/App/Register';
import Friends from 'src/containers/App/ProfileUser/Friends';
import PersonalDetails from 'src/containers/App/ProfileUser/PersonalDetails';

import ProfileUser from './ProfileUser';

// Free comment

// == Composant
const App = ({ isConnected, fetchHomeData }) => {
  useEffect(fetchHomeData, []);
  return (
    <div className="app">
      <Switch>
        <Route path="/coucher-de-soleil" exact component={Sunset} />
        <Route path="/partie-en-cours" exact component={CurrentGame} />
        <Route path="/s'inscrire" exact component={Register} />
        <Route path="/se-connecter" exact>
          {isConnected ? <Redirect to="/" /> : <Login />}
        </Route>
        <Route>
          <Header />
          <main>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/le-jeu/:slug" exact component={RolesDescriptions} />
              <Route path="/configurer-ma-partie/:slug" exact>
                {!isConnected ? <Redirect to="/se-connecter" /> : <Configuration />}
                {/* <Configuration /> */}
              </Route>
              <Route path="/les-jeux">
                <Switch>
                  <Route path="/les-jeux/:slug" exact component={Game} />
                  <Route path="/les-jeux/:slug/:slug" exact component={Specificity} />
                  <Route component={Expansions} />
                </Switch>
              </Route>
              <Route path="/profil" exact component={ProfileUser} />
              <Route path="/profil/mes-informations" exact component={PersonalDetails} />
              <Route path="/profil/mes-amis" exact component={Friends} />
              <Route path="/ma-messagerie" exact component={Mailbox} />
              <Route path="/ma-messagerie/:id" exact component={MessagePrive} />
              <Route path="/qui-sommes-nous" exact>
                <Aboutus />
              </Route>
            </Switch>
          </main>
          <Footer />
        </Route>
      </Switch>
    </div>
  );
};

App.propTypes = {
  isConnected: PropTypes.bool.isRequired,
  fetchHomeData: PropTypes.func.isRequired,
};

// == Export
export default App;
