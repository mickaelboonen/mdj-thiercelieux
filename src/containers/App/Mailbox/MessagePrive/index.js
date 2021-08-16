import { connect } from 'react-redux';
import MessagePrive from 'src/components/App/ProfileUser/Mailbox/MessagePrive';

const mapStateToProps = (state) => ({
  conversations: state.mails.conversations,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MessagePrive);
