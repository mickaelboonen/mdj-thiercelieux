import { connect } from 'react-redux';
import Thief from 'src/components/App/CurrentGame/NightScript/Thief';

import { setThiefAttributes } from 'src/actions/game';

const mapStateToProps = (state) => ({
  thiefRoles: state.game.thiefRoles,
});

const mapDispatchToProps = (dispatch) => ({
  setThiefAttributes: (newRole) => {
    dispatch(setThiefAttributes(newRole));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Thief);
