import { connect } from 'react-redux';
import Victory from 'src/components/App/CurrentGame/Victory';

import { patch, setStats } from 'src/actions/game';

const mapStateToProps = (state) => ({
  players: state.game.players,
  winner: state.game.winner,
  finalStats: state.game.finalStats,
});

const mapDispatchToProps = (dispatch) => ({
  patch: (statsArray) => {
    dispatch(patch(statsArray));
  },
  setStats: () => {
    dispatch(setStats());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Victory);
