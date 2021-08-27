import { connect } from 'react-redux';
import Avatars from 'src/components/App/ProfileUser/PersonalDetails/Avatars';

import { changeAvatar } from 'src/actions/user';

const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = (dispatch) => ({
  changeAvatar: (name) => {
    dispatch(changeAvatar(name));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Avatars);
