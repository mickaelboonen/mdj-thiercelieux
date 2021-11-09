/* eslint-disable max-len */
// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

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
import Login from 'src/containers/App/Login';
import Register from 'src/containers/App/Register';

// ANIMATIONS
import Sunset from 'src/containers/Animations/Sunset';
import Sunrise from 'src/containers/Animations/Sunrise';
import Celebration from 'src/containers/Animations/Celebration';
// CURRENT GAME
import CurrentGame from 'src/containers/App/CurrentGame';
import NightScript from 'src/containers/App/CurrentGame/NightScript';
import Hunter from 'src/containers/App/CurrentGame/DayScript/Hunter';
import Victory from 'src/containers/App/CurrentGame/Victory';
// PROFILE
import Stats from 'src/containers/App/ProfileUser/Stats';
import Friends from 'src/containers/App/ProfileUser/Friends';
import PersonalDetails from 'src/containers/App/ProfileUser/PersonalDetails';

import wolf from 'src/assets/pictures/wolf.svg';
import ProfileUser from './ProfileUser';
import './style.scss';
// Free comment

// == Composant
const App = ({ isConnected, fetchHomeData }) => {
  useEffect(fetchHomeData, []);
  return (
    <div className="app">
      {/* Beginning of Temporary HTML */}
      <div className="desktop">
        <div className="desktop__container">
          <h1>Le Maitre du Jeu de Thiercelieux</h1>
          <div className="desktop__container-text">
            <div>
              <p>
                <span>Bienvenue sur le Maître du Jeu de Thiercelieux</span>, l'application pour tous ces Maîtres du Jeu qui souhaitent enfin faire une partie de Loup-Garou et surtout, la vivre de l'intérieur !
              </p>
              <p>
                L'application est actuellement en <i>phase de développement</i>, la version Desktop n'est pas encore commencée. Je vous invite donc à passer en mode responsive, directement sur votre <i>téléphone</i> ou grâce au <i>DevTools</i>, en dimension iPhone 6/7/8. Le site est développé sous <i>Chrome</i> et n'a pas encore été testé sous d'autres navigateurs.
              </p>
              <p>
                Merci.
              </p>
            </div>
            <img className="desktop__container-logo" src={wolf} alt="Logo" />
          </div>
        </div>
      </div>
      {/* End of Temporary HTML */}
      <div className="app__mobile">
        <Switch>
          <Route path="/coucher-de-soleil" exact component={Sunset} />
          <Route path="/lever-de-soleil" exact component={Sunrise} />
          <Route path="/partie-en-cours" exact component={CurrentGame} />
          <Route path="/partie-en-cours/celebration" exact component={Celebration} />
          <Route path="/partie-en-cours/victoire" exact component={Victory} />
          <Route path="/partie-en-cours/nuit-sur-thiercelieux" exact component={NightScript} />
          <Route path="/partie-en-cours/jour/chasseur" exact component={Hunter} />
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
                <Route path="/profil/mes-statistiques" exact component={Stats} />
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
    </div>
  );
};

App.propTypes = {
  isConnected: PropTypes.bool.isRequired,
  fetchHomeData: PropTypes.func.isRequired,
};

// == Export
export default App;
