import { connect } from 'react-redux';
import UserLi from 'src/components/App/Configuration/Step2/UserLi';

import { savePlayerFromUsers } from 'src/actions/gameConfiguration';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  savePlayerFromUsers: (username, id) => {
    dispatch(savePlayerFromUsers(username, id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UserLi);
