import { connect } from 'react-redux';
import Burger from 'src/components/App/Header/Burger';
import { toggleBurger, closeBurger } from 'src/actions';

const mapStateToProps = (state) => ({
  isBurgerOpen: state.app.isBurgerOpen,
});

const mapDispatchToProps = (dispatch) => ({
  toggleBurger: (id) => {
    dispatch(toggleBurger(id));
  },
  closeBurger: () => {
    dispatch(closeBurger());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Burger);
