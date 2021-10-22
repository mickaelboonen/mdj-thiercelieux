import { connect } from 'react-redux';
import NightScript from 'src/components/App/CurrentGame/NightScript';

import {
  setNextRoleToPlay,
  changePlayersAttributes,
} from 'src/actions/game';

const mapStateToProps = (state) => ({
  gameOrder: state.game.gameOrder,
  players: state.game.players,
  roleToPlay: state.game.roleToPlay,
});

const mapDispatchToProps = (dispatch) => ({
  setNextRoleToPlay: (name) => {
    dispatch(setNextRoleToPlay(name));
  },
  changePlayersAttributes: () => {
    dispatch(changePlayersAttributes());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NightScript);
