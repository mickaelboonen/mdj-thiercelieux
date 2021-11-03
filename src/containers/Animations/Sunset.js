import { connect } from 'react-redux';
import Sunset from 'src/components/Animations/Sunset';

import { setGame, setNight } from 'src/actions/game';

const mapStateToProps = (state) => ({
  isGameSet: state.game.isGameSet,
});

const mapDispatchToProps = (dispatch) => ({
  setGame: () => {
    dispatch(setGame());
  },
  setNight: () => {
    dispatch(setNight());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Sunset);
