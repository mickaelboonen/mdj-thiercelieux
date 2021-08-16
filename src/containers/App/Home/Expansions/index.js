import { connect } from 'react-redux';
import Expansions from 'src/components/App/Home/Expansions';

import { displayNewGame } from 'src/actions';

const mapStateToProps = (state) => ({
  game: state.app.gameToDisplay,
});

const mapDispatchToProps = (dispatch) => ({
  displayNewGame: (newIndexValue, id) => {
    dispatch(displayNewGame(newIndexValue, id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Expansions);
