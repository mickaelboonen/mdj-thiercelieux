
import { mailbox } from "src/data/mailbox";
import { DISPLAY_MAIL } from "../actions/mailbox";

const initialState = {
    mails: mailbox,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {

    default:
      return state;
  }
};

export default reducer;
