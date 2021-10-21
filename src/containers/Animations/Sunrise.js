import { connect } from 'react-redux';
import Sunrise from 'src/components/Animations/Sunrise';

import { setGame } from 'src/actions/game';

const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = (dispatch) => ({
  setGame: () => {
    dispatch(setGame());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Sunrise);
