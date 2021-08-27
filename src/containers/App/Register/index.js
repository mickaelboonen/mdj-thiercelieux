import { connect } from 'react-redux';
import Register from 'src/components/App/Register';

import { saveNewUser } from 'src/actions/user';

const mapStateToProps = (state) => ({
  validationMessage: state.user.validationMessage,
});

const mapDispatchToProps = (dispatch) => ({
  saveNewUser: (data) => {
    dispatch(saveNewUser(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
