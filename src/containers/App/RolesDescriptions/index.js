import { connect } from 'react-redux';
import RolesDescriptions from 'src/components/App/RolesDescriptions';

import { fetchCards } from 'src/actions/RolesDescriptions';

const mapStateToProps = (state) => ({
  data: state.rolesDescriptions.data,
  flipcardData: state.rolesDescriptions.flipcardData,
  currentPageButtons: state.rolesDescriptions.currentPageButtons,
  onFocus: state.rolesDescriptions.onFocus,
  isFiltered: state.rolesDescriptions.isFiltered,
  rolesInputValue: state.rolesDescriptions.rolesInput,
  loading: state.rolesDescriptions.loading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCards: (currentPage) => {
    dispatch(fetchCards(currentPage));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RolesDescriptions);
