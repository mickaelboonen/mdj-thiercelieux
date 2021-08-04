import { connect } from 'react-redux';
import Roles from 'src/components/App/Roles';

import { toggleFocus } from 'src/actions';

const mapStateToProps = (state) => ({
  roles: state.app.roles,
  roleToDisplay: state.app.roleToDisplay,
  onFocus: state.app.onFocus,
});

const mapDispatchToProps = (dispatch) => ({
  toggleFocus: (id) => {
    dispatch(toggleFocus(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Roles);
