import { connect } from 'react-redux';
import Login from 'src/components/App/Login';

import { checkAuth } from 'src/actions/user';

const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = (dispatch) => ({
  checkAuth: (data) => {
    dispatch(checkAuth(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
