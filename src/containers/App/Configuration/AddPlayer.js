import { connect } from 'react-redux';
import AddPlayer from 'src/components/App/Configuration/Step2/AddPlayer';

import { saveSelectChange, savePlayer } from 'src/actions/gameConfiguration';

const mapStateToProps = (state) => ({
  games: state.game.configuration.games,
  rolesList: state.game.rolesList,
  villageList: state.game.villageList,
  inputValue: state.game.pseudo,
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
