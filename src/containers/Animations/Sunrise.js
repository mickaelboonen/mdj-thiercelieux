import { connect } from 'react-redux';
import Sunrise from 'src/components/Animations/Sunrise';

import { setDay } from 'src/actions/game';

const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = (dispatch) => ({
  setDay: () => {
    dispatch(setDay());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Sunrise);
