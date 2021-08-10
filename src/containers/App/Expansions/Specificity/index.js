import { connect } from 'react-redux';
import Specificity from 'src/components/App/Expansions/Specificity';

const mapStateToProps = (state) => ({
  games: state.app.expansions,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Specificity);
