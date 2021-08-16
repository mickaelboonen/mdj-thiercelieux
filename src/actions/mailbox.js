export const DISPLAY_MAIL = 'DISPLAY_MAIL';
export const displayMail = (id) => ({
  type: DISPLAY_MAIL,
  id,
});

export const SELECT_ALL = 'SELECT_ALL';
export const selectAll = (option) => ({
  type: SELECT_ALL,
  option,
});

export const SELECT_MESSAGE = 'SELECT_MESSAGE';
export const selectMessage = (id) => ({
  type: SELECT_MESSAGE,
  id,
});

export const DELETE_CONVERSATION = 'DELETE_CONVERSATION';
export const deleteConversation = () => ({
  type: DELETE_CONVERSATION,
});
