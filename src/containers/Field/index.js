import { connect } from 'react-redux';
import Field from 'src/components/Field';

import {
  changeValue,
  displayResults,
  clearInput,
  reinitializeData,
  changeRolesInputValue,
} from 'src/actions/RolesDescriptions';

import { changeUsersInputValue, fetchUsers } from 'src/actions/user';
import { changePseudoInputValue } from 'src/actions/gameConfiguration';

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
    if (name === 'rolesInput' || name === 'cardsInput' || name === 'villageInput') {
      dispatch(changeRolesInputValue(value, name));
      dispatch(displayResults(value));
    }
    else if (name === 'usersInput') {
      dispatch(changeUsersInputValue(value));
      dispatch(fetchUsers(value));
    }
    else if (name === 'pseudoInput') {
      dispatch(changePseudoInputValue(value));
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
