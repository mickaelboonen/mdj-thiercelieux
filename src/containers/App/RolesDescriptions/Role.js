import { connect } from 'react-redux';
import Role from 'src/components/App/RolesDescriptions/Role';

import { displayRole, toggleFocus } from 'src/actions/Cards';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  displayRole: (id) => {
    dispatch(displayRole(id));
  },
  toggleFocus: (id) => {
    dispatch(toggleFocus(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Role);
