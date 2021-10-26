import { connect } from 'react-redux';
import Buttons from 'src/components/Buttons';

import { applyFilter } from 'src/actions/RolesDescriptions';

const mapStateToProps = (state) => ({
  inputValue: state.rolesDescriptions.rolesInput,
});

const mapDispatchToProps = (dispatch) => ({
  applyFilter: (filter, id) => {
    dispatch(applyFilter(filter, id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);
