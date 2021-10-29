import { connect } from 'react-redux';
import Victory from 'src/components/App/CurrentGame/Victory';

import { patch } from 'src/actions/game';

const mapStateToProps = (state) => ({
  players: state.game.players,
  winner: state.game.winner,
});

const mapDispatchToProps = (dispatch) => ({
  patch: () => {
    dispatch(patch());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Victory);
