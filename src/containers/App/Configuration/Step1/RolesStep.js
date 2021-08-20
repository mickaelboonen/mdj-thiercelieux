import { connect } from 'react-redux';
import RolesStep from 'src/components/App/Configuration/Step1/RolesStep';

import { saveRole } from 'src/actions/gameConfiguration';

const mapStateToProps = (state) => ({
  rolesList: state.configuration.rolesList,
  villageList: state.configuration.villageList,
  numberPlayers: state.configuration.configuration.playersNumber,
  chosenHiddenRoles: state.configuration.chosenHiddenRoles,
  chosenVillageRoles: state.configuration.chosenVillageRoles,
  errorMessage: state.configuration.errorMessage,
  configDone: state.configuration.configDone,
});

const mapDispatchToProps = (dispatch) => ({
  saveRole: (value, id, name = '', checked) => {
    dispatch(saveRole(value, id, name, checked));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RolesStep);
