import { connect } from 'react-redux';
import Buttons from 'src/components/Buttons';

import { filterBy } from 'src/actions/RolesDescriptions';

const mapStateToProps = (state) => ({
  inputValue: state.rolesDescriptions.rolesInput,
});

const mapDispatchToProps = (dispatch) => ({
  filterBy: (value, filter) => {
    dispatch(filterBy(value, filter));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);
