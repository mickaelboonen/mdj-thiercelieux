import { connect } from 'react-redux';
import RolesStep from 'src/components/App/Configuration/Step1/RolesStep';

import { saveRole } from 'src/actions/gameConfiguration';

const mapStateToProps = (state) => ({
  rolesList: state.game.rolesList,
  villageList: state.game.villageList,
  numberPlayers: state.game.configuration.playersNumber,
  chosenHiddenRoles: state.game.chosenHiddenRoles,
  chosenVillageRoles: state.game.chosenVillageRoles,
  errorMessage: state.game.errorMessage,
});

const mapDispatchToProps = (dispatch) => ({
  saveRole: (value, id, name = '') => {
    dispatch(saveRole(value, id, name));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RolesStep);
