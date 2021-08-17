import { connect } from 'react-redux';
import Field from 'src/components/Field';

import {
  changeValue,
  displayResults,
  clearInput,
  reinitializeData,
} from 'src/actions/RolesDescriptions';

const mapStateToProps = (state, ownProps) => {
  let value = '';
  if (ownProps.name === 'pseudoInput') {
    value = state.game.pseudo;
  }
  else if (ownProps.name === 'rolesInput' || ownProps.name === 'cardsInput' || ownProps.name === 'villageInput') {
    value = state.rolesDescriptions.rolesInput;
  }
  return ({
    value: value,
  });
};

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
