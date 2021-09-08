import { connect } from 'react-redux';
import PlayerInfo from 'src/components/App/CurrentGame/PlayerInfo';

import { displayPlayer, killByVote } from 'src/actions/game';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  displayPlayer: (id) => {
    dispatch(displayPlayer(id));
  },
  killByVote: (name) => {
    dispatch(killByVote(name));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayerInfo);
