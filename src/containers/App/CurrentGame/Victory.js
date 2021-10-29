import { connect } from 'react-redux';
import Victory from 'src/components/App/CurrentGame/Victory';

import { patch, setStats, changeForVictoryReducer } from 'src/actions/game';

const mapStateToProps = (state) => ({
  players: state.victory.players,
  winner: state.victory.winner,
  finalStats: state.victory.finalStats,
});

const mapDispatchToProps = (dispatch) => ({
  patch: (statsArray) => {
    dispatch(patch(statsArray));
  },
  setStats: (array) => {
    dispatch(setStats(array));
  },
  changeForVictoryReducer: () => {
    dispatch(changeForVictoryReducer());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Victory);
