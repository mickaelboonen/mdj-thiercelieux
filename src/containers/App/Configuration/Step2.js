import { connect } from 'react-redux';
import Step2 from 'src/components/App/Configuration/Step2';

import {
  addNewPlayer,
} from 'src/actions/gameConfiguration';

const mapStateToProps = (state) => ({
  configuration: state.game.configuration,
  players: state.game.players,
  addingNewPlayer: state.game.addingNewPlayer,
});

const mapDispatchToProps = (dispatch) => ({
  addNewPlayer: () => {
    dispatch(addNewPlayer());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Step2);
