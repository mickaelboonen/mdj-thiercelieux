import { connect } from 'react-redux';
import Roles from 'src/components/App/Roles';

import { toggleFocus, reinitializeRolesList } from 'src/actions/roles';
import { clearInput } from 'src/actions';

const mapStateToProps = (state) => ({
  roles: state.roles.roles,
  roleToDisplay: state.roles.roleToDisplay,
  onFocus: state.roles.onFocus,
  selects: state.roles.selects,
  isFiltered: state.village.isFiltered,
  rolesInputValue: state.roles.rolesInputValue,
});

const mapDispatchToProps = (dispatch) => ({
  toggleFocus: (id) => {
    dispatch(toggleFocus(id));
  },
  clearInput: (input) => {
    dispatch(clearInput(input));
  },
  reinitializeRolesList: () => {
    dispatch(reinitializeRolesList());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Roles);
