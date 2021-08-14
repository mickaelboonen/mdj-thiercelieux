import { connect } from 'react-redux';
import Card from 'src/components/App/RolesDescriptions/Card';

import { displayCard, toggleFocus } from 'src/actions/RolesDescriptions';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  displayCard: (id) => {
    dispatch(displayCard(id));
  },
  toggleFocus: (id) => {
    dispatch(toggleFocus(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
