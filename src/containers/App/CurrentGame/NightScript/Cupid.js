import { connect } from 'react-redux';
import Cupid from 'src/components/App/CurrentGame/NightScript/Cupid';

import { setCupidAttributes } from 'src/actions/game';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  setCupidAttributes: (firstLover, secondLover) => {
    dispatch(setCupidAttributes(firstLover, secondLover));
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(Cupid);
