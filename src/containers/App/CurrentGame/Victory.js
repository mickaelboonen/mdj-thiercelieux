import { connect } from 'react-redux';
import Victory from 'src/components/App/CurrentGame/Victory';

import { prepareForPatch } from 'src/actions/game';

const mapStateToProps = (state) => ({
  players: state.game.players,
  winner: state.game.winner,
  isPatchDone: state.game.isPatchDone,
  requestsPercent: state.game.requestsPercent,
});

const mapDispatchToProps = (dispatch) => ({
  prepareForPatch: () => {
    dispatch(prepareForPatch());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Victory);
