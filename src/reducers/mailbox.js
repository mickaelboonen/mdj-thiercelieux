
import { mailbox } from "src/data/mailbox";
import { SELECT_ALL, SELECT_MESSAGE } from "../actions/mailbox";

const initialState = {
    mails: mailbox,
    checked: false,
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
      console.log(newArray);
      return {
        ...state,
        mails: newArray,
      }
    }  

    default:
      return state;
  }
};

export default reducer;
