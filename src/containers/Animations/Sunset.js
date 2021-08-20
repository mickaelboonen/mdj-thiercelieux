import { connect } from 'react-redux';
import Sunset from 'src/components/Animations/Sunset';

import { setGame } from 'src/actions/game';

const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = (dispatch) => ({
  setGame: () => {
    dispatch(setGame());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Sunset);
