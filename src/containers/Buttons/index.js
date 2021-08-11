import { connect } from 'react-redux';
import Buttons from 'src/components/Buttons';

import { reinitializeVillageRolesList } from 'src/actions/Cards/villageActions';
import { clearInput } from 'src/actions';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  // toggleFocus: (id) => {
  //   dispatch(toggleFocus(id));
  // },
  clearInput: (input) => {
    dispatch(clearInput(input));
  },
  reinitializeVillageRolesList: () => {
    dispatch(reinitializeVillageRolesList());
  },
  // filterBy: () => {
  //   dispatch(filterBy());
  // },
});

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);
