import { connect } from 'react-redux';
import Victory from 'src/components/App/CurrentGame/Victory';

const mapStateToProps = (state) => ({
  players: state.game.players,
  winner: state.game.winner,
});

const mapDispatchToProps = (dispatch) => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Victory);
