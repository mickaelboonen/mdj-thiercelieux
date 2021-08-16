
import { mailbox } from "src/data/mailbox";
import { DELETE_CONVERSATION, SELECT_ALL, SELECT_MESSAGE } from "../actions/mailbox";

const initialState = {
    mails: mailbox,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SELECT_ALL: {
      let selectArray = [];
      if (action.option === 'Tout sélectionner') { 
      selectArray = state.mails.map((mail) => {
        mail.checked = true;
        return mail;
      });}
      else {
      selectArray = state.mails.map((mail) => {
        mail.checked = false;
        return mail;
        });
      }
      return {
        ...state,
        mails: selectArray,
      }
    };
    case SELECT_MESSAGE: {
      const newArray = state.mails.map((mail) => {
        if (action.id === mail.id ) {
          mail.checked = !mail.checked;
          return mail;
        }
        return mail;
      });
      return {
        ...state,
        mails: newArray,
      }
    };
    case DELETE_CONVERSATION:
      const newArray = state.mails.filter((mail) => !mail.checked)
      return {
        ...state,
        mails: newArray,
      }
    default:
      return state;
  }
};

export default reducer;
