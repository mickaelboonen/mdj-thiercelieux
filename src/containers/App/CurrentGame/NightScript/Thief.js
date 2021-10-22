import { connect } from 'react-redux';
import Thief from 'src/components/App/CurrentGame/NightScript/Thief';

import { setChanges } from 'src/actions/game';

const mapStateToProps = (state) => ({
  thiefRoles: state.game.thiefRoles,
});

const mapDispatchToProps = (dispatch) => ({
  setChanges: (changes) => {
    dispatch(setChanges(changes));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Thief);
