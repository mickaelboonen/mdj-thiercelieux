import { connect } from 'react-redux';
import Login from 'src/components/App/Login';

import { login } from 'src/actions/user';

const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = (dispatch) => ({
  login: (data) => {
    dispatch(login(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
