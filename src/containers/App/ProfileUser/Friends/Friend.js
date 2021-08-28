import { connect } from 'react-redux';
import Friend from 'src/components/App/ProfileUser/Friends/Friend';
import { deleteFriend } from 'src/actions/user';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  deleteFriend: (name) => {
    dispatch(deleteFriend(name));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Friend);
