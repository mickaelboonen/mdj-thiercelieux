import { connect } from 'react-redux';
import DropdownBurger from 'src/components/App/Header/Burger/DropdownBurger';

import { logout } from 'src/actions/user/login';

const mapStateToProps = (state) => ({
  isBurgerOpen: state.app.isBurgerOpen,
  isConnected: state.user.isConnected,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => {
    dispatch(logout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DropdownBurger);
