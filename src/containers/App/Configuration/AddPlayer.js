import { connect } from 'react-redux';
import AddPlayer from 'src/components/App/Configuration/Step2/AddPlayer';

import { saveSelectChange, savePlayer } from 'src/actions/gameConfiguration';

const mapStateToProps = (state) => ({
  games: state.configuration.configuration.games,
  rolesList: state.configuration.rolesList,
  villageList: state.configuration.villageList,
  inputValue: state.configuration.pseudo,
  usersList: state.user.usersList,
  pseudo: state.configuration.pseudo,
});

const mapDispatchToProps = (dispatch) => ({
  saveSelectChange: (value, select) => {
    dispatch(saveSelectChange(value, select));
  },
  savePlayer: () => {
    dispatch(savePlayer());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPlayer);
