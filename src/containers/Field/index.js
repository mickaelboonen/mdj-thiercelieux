import { connect } from 'react-redux';
import Field from 'src/components/Field';

import {
  changeValue,
  displayResults,
  clearInput,
  reinitializeData,
} from 'src/actions/RolesDescriptions';

const mapStateToProps = (state) => ({
  value: state.rolesDescriptions.rolesInput,
});

const mapDispatchToProps = (dispatch) => ({
  changeValue: (value, name) => {
    dispatch(changeValue(value, name));
    if (name === 'rolesInput' || name === 'cardsInput' || name === 'villageInput') {
      dispatch(displayResults(value));
    }
  },
  clearInput: (input) => {
    dispatch(clearInput(input));
  },
  reinitializeData: () => {
    dispatch(reinitializeData());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Field);
