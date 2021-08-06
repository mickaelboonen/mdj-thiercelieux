import { connect } from 'react-redux';
import Game from 'src/components/App/Expansions/Game';

const mapStateToProps = (state) => ({
  games: state.app.expansions,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
