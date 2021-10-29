import { connect } from 'react-redux';
import Celebration from 'src/components/Animations/Celebration';

import { setsStatsArrayForRequest } from 'src/actions/game';

const mapStateToProps = (state) => ({
  players: state.game.players,
  isArraySet: state.game.isArraySet,
});

const mapDispatchToProps = (dispatch) => ({
  setsStatsArrayForRequest: (array) => {
    dispatch(setsStatsArrayForRequest(array));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Celebration);
