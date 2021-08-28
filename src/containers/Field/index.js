import { connect } from 'react-redux';
import Field from 'src/components/Field';

import {
  changeValue,
  displayResults,
  clearInput,
  reinitializeData,
} from 'src/actions/RolesDescriptions';

import { fetchUsers } from 'src/actions/user';

const mapStateToProps = (state, ownProps) => {
  let value = '';
  if (ownProps.name === 'pseudoInput') {
    value = state.configuration.pseudo;
  }
  else if (ownProps.name === 'rolesInput' || ownProps.name === 'cardsInput' || ownProps.name === 'villageInput') {
    value = state.rolesDescriptions.rolesInput;
  }
  else if (ownProps.name === 'usersInput') {
    value = state.user.usersInput;
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
    else if (name === 'usersInput') {
      dispatch(fetchUsers(value));
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
