import { connect } from 'react-redux';
import Buttons from 'src/components/Buttons';

import { reinitializeVillageRolesList } from 'src/actions/Cards/villageActions';
import { filterBy } from 'src/actions/Cards/index';
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
  filterBy: (value, filter) => {
    dispatch(filterBy(value, filter));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);
