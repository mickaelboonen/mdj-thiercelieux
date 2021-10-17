import { connect } from 'react-redux';
import App from 'src/components/App';

import { fetchHomeData } from 'src/actions';

const mapStateToProps = (state) => ({
  isConnected: state.user.isConnected,
});

const mapDispatchToProps = (dispatch) => ({
  fetchHomeData: () => {
    dispatch(fetchHomeData());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
