import { connect } from 'react-redux';
import Messages from 'src/components/App/ProfileUser/Mailbox/Messages';

import { selectMessage } from 'src/actions/mailbox';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
    selectMessage: (id) => {
        dispatch(selectMessage(id));
      },
});

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
