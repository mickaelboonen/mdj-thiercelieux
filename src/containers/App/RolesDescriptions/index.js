import { connect } from 'react-redux';
import RolesDescriptions from 'src/components/App/RolesDescriptions';

import { fillReducer } from '../../../actions/Cards';

const mapStateToProps = (state) => ({
  data: state.rolesDescriptions.data,
  flipcardData: state.rolesDescriptions.flipcardData,
  currentPageButtons: state.rolesDescriptions.currentPageButtons,
  onFocus: state.rolesDescriptions.onFocus,
  isFiltered: state.rolesDescriptions.isFiltered,
  rolesInputValue: state.rolesDescriptions.rolesInputValue,
  cardsInputValue: state.rolesDescriptions.cardsInputValue,
  villageInputValue: state.rolesDescriptions.villageInputValue,
  loading: state.rolesDescriptions.loading,
});

const mapDispatchToProps = (dispatch) => ({
  fillReducer: (currentPage) => {
    dispatch(fillReducer(currentPage));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RolesDescriptions);
