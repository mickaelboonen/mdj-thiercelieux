import { connect } from 'react-redux';
import Avatars from 'src/components/App/ProfileUser/PersonalDetails/Avatars';

import { changeAvatar, fetchAvatars } from 'src/actions/user';

const mapStateToProps = (state) => ({
  avatars: state.user.avatars,
});

const mapDispatchToProps = (dispatch) => ({
  changeAvatar: (name) => {
    dispatch(changeAvatar(name));
  },
  fetchAvatars: () => {
    dispatch(fetchAvatars());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Avatars);
