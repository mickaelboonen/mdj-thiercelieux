import { connect } from 'react-redux';
import NewMoon from 'src/components/App/NewMoon';

const mapStateToProps = (state) => ({
  cards: state.newMoon.cards,
  cardToDisplay: state.newMoon.cardToDisplay,
  onFocus: state.newMoon.onFocus,
  cardInputValue: state.newMoon.cardInputValue,
});

const mapDispatchToProps = (dispatch) => ({
  toggleFocus: (id) => {
    dispatch(toggleFocus(id));
  },
  clearInput: (input) => {
    dispatch(clearInput(input));
  },
  reinitializeRolesList: () => {
    dispatch(reinitializeRolesList());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NewMoon);
