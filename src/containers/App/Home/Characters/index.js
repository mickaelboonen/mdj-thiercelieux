import { connect } from 'react-redux';
import Characters from 'src/components/App/Home/Characters';

import { fetchRandomRoles, displayNewRole } from 'src/actions';

const mapStateToProps = (state) => ({
  roleToDisplay: state.app.roleToDisplay,
  randomRoles: state.app.randomRoles,
});

const mapDispatchToProps = (dispatch) => ({
  fetchRandomRoles: () => {
    dispatch(fetchRandomRoles());
  },
  displayNewRole: (newIndexValue, id) => {
    dispatch(displayNewRole(newIndexValue, id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Characters);
