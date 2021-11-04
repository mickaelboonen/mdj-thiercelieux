import { connect } from 'react-redux';
import Stats from 'src/components/App/ProfileUser/Stats';

// import { fetchStatsForProfile } from 'src/actions/user';

const mapStateToProps = (state) => ({
  stats: state.user.stats,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Stats);
