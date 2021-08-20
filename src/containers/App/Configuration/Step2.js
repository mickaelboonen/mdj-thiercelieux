import { connect } from 'react-redux';
import Step2 from 'src/components/App/Configuration/Step2';

import {
  addNewPlayer,
  setRolesRandomly,
} from 'src/actions/gameConfiguration';

const mapStateToProps = (state) => ({
  configuration: state.configuration.configuration,
  players: state.configuration.players,
  addingNewPlayer: state.configuration.addingNewPlayer,
});

const mapDispatchToProps = (dispatch) => ({
  addNewPlayer: () => {
    dispatch(addNewPlayer());
  },
  setRolesRandomly: () => {
    dispatch(setRolesRandomly());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Step2);
