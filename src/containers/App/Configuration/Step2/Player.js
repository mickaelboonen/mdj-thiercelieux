import { connect } from 'react-redux';
import Player from 'src/components/App/Configuration/Step2/Player';

import { deletePlayer } from 'src/actions/gameConfiguration';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  deletePlayer: (name) => {
    dispatch(deletePlayer(name));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Player);
