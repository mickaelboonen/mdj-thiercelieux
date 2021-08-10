import { connect } from 'react-redux';
import Field from 'src/components/Field';

import { changeValue } from 'src/actions';
import { displayResults } from 'src/actions/roles';

const mapStateToProps = (state) => ({
  value: state.roles.rolesInputValue,
});

const mapDispatchToProps = (dispatch) => ({
  changeValue: (value, name) => {
    dispatch(changeValue(value, name));

    if (name === 'rolesInput' || name === 'cardsInput') {
      dispatch(displayResults(value));
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Field);
