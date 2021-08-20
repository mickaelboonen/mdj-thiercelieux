import { connect } from 'react-redux';
import Configuration from 'src/components/App/Configuration';

import { selectNewmoon } from 'src/actions/gameConfiguration';

const mapStateToProps = (state) => ({
  configuration: state.configuration.configuration,
});

const mapDispatchToProps = (dispatch) => ({
  selectNewmoon: () => {
    dispatch(selectNewmoon());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Configuration);
