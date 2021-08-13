import { connect } from 'react-redux';
import Results from 'src/components/App/RolesDescriptions/Results';

import { toggleFocus } from 'src/actions/Cards';

const mapStateToProps = (state) => ({
  newMoonCardsPage: state.rolesDescriptions.newMoonCardsPage,
});

const mapDispatchToProps = (dispatch) => ({
  toggleFocus: (id) => {
    dispatch(toggleFocus(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Results);
