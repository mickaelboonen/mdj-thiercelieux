import { connect } from 'react-redux';
import Cupid from 'src/components/App/CurrentGame/NightScript/Cupid';

import { setChanges } from 'src/actions/game';

const mapStateToProps = (state) => ({
  players: state.game.players,
});

const mapDispatchToProps = (dispatch) => ({
  setChanges: (changes) => {
    dispatch(setChanges(changes));
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(Cupid);
