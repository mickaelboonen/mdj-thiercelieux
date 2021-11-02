import { connect } from 'react-redux';
import AddPlayer from 'src/components/App/Configuration/Step2/AddPlayer';

import { saveSelectChange, savePlayer, goBackToPlayersList } from 'src/actions/gameConfiguration';

const mapStateToProps = (state) => ({
  games: state.configuration.configuration.games,
  rolesList: state.configuration.rolesList,
  villageList: state.configuration.villageList,
  inputValue: state.configuration.pseudo,
  pseudo: state.configuration.pseudo,
  usersList: state.user.usersList,
  usersInput: state.user.usersInput,
});

const mapDispatchToProps = (dispatch) => ({
  saveSelectChange: (value, select) => {
    dispatch(saveSelectChange(value, select));
  },
  savePlayer: () => {
    dispatch(savePlayer());
  },
  goBackToPlayersList: () => {
    dispatch(goBackToPlayersList());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPlayer);
