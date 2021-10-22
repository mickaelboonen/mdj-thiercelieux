import { connect } from 'react-redux';
import CurrentGame from 'src/components/App/CurrentGame';

import { resetPlayerToDisplay } from 'src/actions/game';

const mapStateToProps = (state) => ({
  players: state.game.players,
  playerToDisplay: state.game.playerToDisplay,
  newspaper: state.game.newspaper,
});

const mapDispatchToProps = (dispatch) => ({
  resetPlayerToDisplay: (id) => {
    dispatch(resetPlayerToDisplay(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrentGame);
