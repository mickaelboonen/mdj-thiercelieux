import { connect } from 'react-redux';
import Register from 'src/components/App/Register';

import { saveNewUser, clearMessages } from 'src/actions/user';

const mapStateToProps = (state) => ({
  validationMessage: state.user.validationMessage,
  userErrors: state.user.errors,
});

const mapDispatchToProps = (dispatch) => ({
  saveNewUser: (data) => {
    dispatch(saveNewUser(data));
  },
  clearMessages: () => {
    dispatch(clearMessages());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
