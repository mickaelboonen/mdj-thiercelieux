import { connect } from 'react-redux';
import VillagePeople from 'src/components/App/VillagePeople';

import { toggleFocus, reinitializeRolesList } from 'src/actions/Cards/villageActions';
import { clearInput } from 'src/actions';

const mapStateToProps = (state) => ({
  roles: state.village.villageRoles,
  roleToDisplay: state.village.roleToDisplay,
  onFocus: state.village.onFocus,
  villageInputValue: state.village.villageInputValue,
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

export default connect(mapStateToProps, mapDispatchToProps)(VillagePeople);
