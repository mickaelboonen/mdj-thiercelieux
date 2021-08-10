import { connect } from 'react-redux';
import NewMoon from 'src/components/App/NewMoon';

import { toggleFocus, reinitializeCardsList } from 'src/actions/cards';
import { clearInput } from 'src/actions';

const mapStateToProps = (state) => ({
  cards: state.newMoon.cards,
  cardToDisplay: state.newMoon.cardToDisplay,
  onFocus: state.newMoon.onFocus,
  cardsInputValue: state.newMoon.cardsInputValue,
});

const mapDispatchToProps = (dispatch) => ({
  toggleFocus: (id) => {
    dispatch(toggleFocus(id));
  },
  clearInput: (input) => {
    dispatch(clearInput(input));
  },
  reinitializeCardsList: () => {
    dispatch(reinitializeCardsList());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NewMoon);
