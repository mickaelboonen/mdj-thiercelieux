import { connect } from 'react-redux';
import Role from 'src/components/App/NewMoon/Card';

import { displayCard, toggleFocus } from 'src/actions/cards';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  displayCard: (id) => {
    dispatch(displayCard(id));
  },
  toggleFocus: (id) => {
    dispatch(toggleFocus(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Role);
