import { connect } from 'react-redux';
import Hunter from 'src/components/App/CurrentGame/DayScript/Hunter';

import { killPlayer } from 'src/actions/game';

const mapStateToProps = (state) => ({
  players: state.game.players,
});

const mapDispatchToProps = (dispatch) => ({
  killPlayer: (victim) => {
    dispatch(killPlayer(victim));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Hunter);
