import { connect } from 'react-redux';
import CurrentGame from 'src/components/App/CurrentGame';

const mapStateToProps = (state) => ({
  players: state.game.players,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CurrentGame);
