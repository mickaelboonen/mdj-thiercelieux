import { connect } from 'react-redux';
import PlayerInfo from 'src/components/App/CurrentGame/PlayerInfo';

import { displayPlayer } from 'src/actions/game';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  displayPlayer: (id) => {
    dispatch(displayPlayer(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayerInfo);
