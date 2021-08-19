import { connect } from 'react-redux';
import RolesStep from 'src/components/App/Configuration/Step1/RolesStep';

const mapStateToProps = (state) => ({
  rolesList: state.game.rolesList,
  villageList: state.game.villageList,
});

const mapDispatchToProps = (dispatch) => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(RolesStep);
