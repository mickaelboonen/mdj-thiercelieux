import { connect } from 'react-redux';
import DropdownBurger from 'src/components/App/Header/Burger/DropdownBurger';

const mapStateToProps = (state) => ({
  isBurgerOpen: state.app.isBurgerOpen,
  isConnected: state.user.isConnected,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DropdownBurger);
