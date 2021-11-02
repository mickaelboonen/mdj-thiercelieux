import { connect } from 'react-redux';
import RolesStep from 'src/components/App/Configuration/Step1/RolesStep';

import { saveRole, applySelectedConfiguration, setConfigErrorMessage } from 'src/actions/gameConfiguration';

const mapStateToProps = (state) => ({
  rolesList: state.configuration.rolesList,
  villageList: state.configuration.villageList,
  chosenHiddenRoles: state.configuration.chosenHiddenRoles,
  chosenVillageRoles: state.configuration.chosenVillageRoles,
  numberPlayers: state.configuration.configuration.playersNumber,
  errorMessage: state.configuration.errorMessage,
  configDone: state.configuration.configDone,
  preferences: state.user.preferences,
});

const mapDispatchToProps = (dispatch) => ({
  saveRole: (value, id, name = '', checked) => {
    dispatch(saveRole(value, id, name, checked));
  },
  applySelectedConfiguration: (config) => {
    dispatch(applySelectedConfiguration(config));
  },
  setConfigErrorMessage: (error) => {
    dispatch(setConfigErrorMessage(error));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RolesStep);
