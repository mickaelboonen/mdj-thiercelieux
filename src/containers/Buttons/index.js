import { connect } from 'react-redux';
import Buttons from 'src/components/Buttons';

import { filterBy, clearInput, reinitializeData } from 'src/actions/Cards/index';
// import { clearInput } from 'src/actions';

const mapStateToProps = (state) => ({
  inputValue: state.rolesDescriptions.rolesInput,
});

const mapDispatchToProps = (dispatch) => ({
  clearInput: (input) => {
    dispatch(clearInput(input));
  },
  reinitializeData: () => {
    dispatch(reinitializeData());
  },
  filterBy: (value, filter) => {
    dispatch(filterBy(value, filter));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);
