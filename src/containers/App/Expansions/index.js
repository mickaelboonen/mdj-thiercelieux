import { connect } from 'react-redux';
import Expansions from 'src/components/App/Expansions';

const mapStateToProps = (state) => ({
  expansionsArray: state.app.expansions,
});

// const mapDispatchToProps = (dispatch) => ({
  
// });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Expansions);
