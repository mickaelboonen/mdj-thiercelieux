import { connect } from 'react-redux';
import PersonalDetails from 'src/components/App/ProfileUser/PersonalDetails';

import { changeAvatar, savePseudoInState, saveEmailInState } from 'src/actions/user';

const mapStateToProps = (state) => ({
  pseudo: state.user.pseudo,
  email: state.user.email,
  avatar: state.user.avatar,
});

const mapDispatchToProps = (dispatch) => ({
  changeAvatar: (name) => {
    dispatch(changeAvatar(name));
  },
  savePseudoInState: (value) => {
    dispatch(savePseudoInState(value));
  },
  saveEmailInState: (value) => {
    dispatch(saveEmailInState(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PersonalDetails);
