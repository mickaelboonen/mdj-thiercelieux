import { connect } from 'react-redux';
import Mailbox from 'src/components/App/ProfileUser/Mailbox';

import { selectAll } from 'src/actions/mailbox'

const mapStateToProps = (state) => ({
    mails: state.mails.mails,
   
});

const mapDispatchToProps = (dispatch) => ({
    selectAll: (option) => {
        dispatch(selectAll(option));
      },
});

export default connect(mapStateToProps, mapDispatchToProps)(Mailbox);
