import { connect } from 'react-redux';
import Friends from 'src/components/App/ProfileUser/Friends';

import { addNewFriend } from 'src/actions/user';

const mapStateToProps = (state) => ({
  users: state.user.usersList,
  friends: state.user.friends,
});

const mapDispatchToProps = (dispatch) => ({
  addNewFriend: (name) => {
    dispatch(addNewFriend(name));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Friends);
