import { connect } from 'react-redux';
import Results from 'src/components/App/RolesDescriptions/Results';

import { toggleFocus } from 'src/actions/RolesDescriptions';

const mapStateToProps = (state) => ({
  newMoonCardsPage: state.rolesDescriptions.newMoonCardsPage,
  sort: state.rolesDescriptions.sort,
  filter: state.rolesDescriptions.filter,
  villageRolesPage: state.rolesDescriptions.villageRolesPage,
  hiddenRolesPage: state.rolesDescriptions.hiddenRolesPage,
  rolesInput: state.rolesDescriptions.rolesInput,
});

const mapDispatchToProps = (dispatch) => ({
  toggleFocus: (id) => {
    dispatch(toggleFocus(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Results);
