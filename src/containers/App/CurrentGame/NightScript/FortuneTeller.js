import { connect } from 'react-redux';
import FortuneTeller from 'src/components/App/CurrentGame/NightScript/FortuneTeller';

import { setFortuneTellerAttributes } from 'src/actions/game';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  setFortuneTellerAttributes: (firstLover, secondLover) => {
    dispatch(setFortuneTellerAttributes(firstLover, secondLover));
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(FortuneTeller);
