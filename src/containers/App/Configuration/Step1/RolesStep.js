import { connect } from 'react-redux';
import RolesStep from 'src/components/App/Configuration/Step1/RolesStep';

import { saveRole } from 'src/actions/gameConfiguration';

const mapStateToProps = (state) => ({
  rolesList: state.configuration.rolesList,
  villageList: state.configuration.villageList,
  chosenHiddenRoles: state.configuration.chosenHiddenRoles,
  chosenVillageRoles: state.configuration.chosenVillageRoles,
  numberPlayers: state.configuration.configuration.playersNumber,
  errorMessage: state.configuration.errorMessage,
  configDone: state.configuration.configDone,
});

const mapDispatchToProps = (dispatch) => ({
  saveRole: (value, id, name = '', checked) => {
    dispatch(saveRole(value, id, name, checked));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RolesStep);
