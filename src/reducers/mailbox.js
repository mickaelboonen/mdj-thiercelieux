
import { mailbox } from "src/data/mailbox";
import { SELECT_ALL } from "../actions/mailbox";

const initialState = {
    mails: mailbox,
    checked: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SELECT_ALL: {
      
      return {
        ...state,
        checked: true,
      }
    }

    default:
      return state;
  }
};

export default reducer;
