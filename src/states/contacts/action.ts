const ActionType = {
  RECEIVER_CONTACTS: "RECEIVE_CONTACTS",
  RECEIVE_ADD_CONTACT: "RECEIVE_ADD_CONTACT",
  RECEIVE_EDIT_CONTACT: "RECEIVE_EDIT_CONTACT",
  RECEIVE_DELETE_CONTACT: "RECEIVE_DELETE_CONTACT",
};

function receiveContactsActionCreator(contacts: any) {
  return {
    type: ActionType.RECEIVER_CONTACTS,
    payload: {
      contacts,
    },
  };
}

function receiveAddContactActionCreator(contact: any) {
  return {
    type: ActionType.RECEIVE_ADD_CONTACT,
    payload: {
      contact,
    },
  };
}

function receiveEditContactActionCreator(contact: any, contactId: string) {
  return {
    type: ActionType.RECEIVE_EDIT_CONTACT,
    payload: {
      contact,
      contactId,
    },
  };
}

function receiveDeleteContactActionCreator(contactId: string) {
  return {
    type: ActionType.RECEIVE_DELETE_CONTACT,
    payload: contactId,
  };
}

export {
  ActionType,
  receiveContactsActionCreator,
  receiveAddContactActionCreator,
  receiveEditContactActionCreator,
  receiveDeleteContactActionCreator,
};
