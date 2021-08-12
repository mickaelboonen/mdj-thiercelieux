import { connect } from 'react-redux';
import Field from 'src/components/Field';

import { changeValue, displayResults } from 'src/actions/Cards';

const mapStateToProps = (state) => ({
  value: state.roles.rolesInputValue,
});

const mapDispatchToProps = (dispatch) => ({
  changeValue: (value, name) => {
    dispatch(changeValue(value, name));
    console.log(name);
    if (name === 'rolesInput' || name === 'cardsInput' || name === 'villageInput') {
      dispatch(displayResults(value));
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Field);
