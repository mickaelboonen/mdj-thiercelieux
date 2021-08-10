import { connect } from 'react-redux';
import Aboutus from 'src/components/App/Aboutus';

import { displayMember, focusMember } from 'src/actions/members';

const mapStateToProps = (state) => ({
    members: state.members.members,
    memberToDisplay: state.members.memberToDisplay,
    onFocus: state.members.onFocus,
  });

const mapDispatchToProps = (dispatch) => ({
    displayMember: (id) => {
        dispatch(displayMember(id));
      },
    focusMember: (id) => {
        dispatch(focusMember(id));
      },
});

export default connect(mapStateToProps, mapDispatchToProps)(Aboutus);
