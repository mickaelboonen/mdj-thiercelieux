import { connect } from 'react-redux';
import MessagePrive from 'src/components/App/ProfileUser/Mailbox/MessagePrive';

import { addNewMessage } from 'src/actions/mailbox';

const mapStateToProps = (state) => ({
  conversations: state.mails.conversations,
});

const mapDispatchToProps = (dispatch) => ({
  addNewMessage: (data) => {
    dispatch(addNewMessage(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MessagePrive);
