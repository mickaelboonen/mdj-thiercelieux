import { connect } from 'react-redux';
import Witch from 'src/components/App/CurrentGame/NightScript/Witch';

import { setWitchAttributes } from 'src/actions/game';

const mapStateToProps = (state) => ({
  players: state.game.players,
});

const mapDispatchToProps = (dispatch) => ({
  setWitchAttributes: (wolfVictim, witchVictim) => {
    dispatch(setWitchAttributes(wolfVictim, witchVictim));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Witch);
