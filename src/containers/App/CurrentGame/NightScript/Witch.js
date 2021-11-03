import { connect } from 'react-redux';
import Witch from 'src/components/App/CurrentGame/NightScript/Witch';

import { setChanges } from 'src/actions/game';

const mapStateToProps = (state) => ({
  players: state.game.players,
});

const mapDispatchToProps = (dispatch) => ({
  setChanges: (changes) => {
    dispatch(setChanges(changes));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Witch);
