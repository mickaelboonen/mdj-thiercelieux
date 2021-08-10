import { connect } from 'react-redux';
import Mailbox from 'src/components/App/ProfileUser/Mailbox';

const mapStateToProps = (state) => ({
    mails: state.mails.mails,
   
});

const mapDispatchToProps = (dispatch) => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Mailbox);
