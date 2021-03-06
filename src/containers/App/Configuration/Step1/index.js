import { connect } from 'react-redux';
import Step1 from 'src/components/App/Configuration/Step1';

import {
  setPlayersNumber,
  setGames,
  setGameOrder,
  setNewmoonCards,
  setRolesAttribution,
} from 'src/actions/gameConfiguration';

const mapStateToProps = (state) => ({
  errorMessage: state.configuration.errorMessage,
  preferences: state.user.preferences,
  games: state.configuration.configuration.games,
  nextStepSlug: state.configuration.configuration.rolesAttribution,
});

const mapDispatchToProps = (dispatch) => ({
  setPlayersNumber: (value) => {
    dispatch(setPlayersNumber(value));
  },
  setGames: (value) => {
    dispatch(setGames(value));
  },
  setGameOrder: (value) => {
    dispatch(setGameOrder(value));
  },
  setNewmoonCards: (value) => {
    dispatch(setNewmoonCards(value));
  },
  setRolesAttribution: (value) => {
    dispatch(setRolesAttribution(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Step1);
