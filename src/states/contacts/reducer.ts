/* eslint-disable no-case-declarations */
import { Contact } from "../../types/ContactTypes";
import { ActionType } from "./action";

function contactsReducer(contacts: Contact[] = [], action: any) {
  switch (action.type) {
    case ActionType.RECEIVER_CONTACTS:
      return action.payload.contacts;

    case ActionType.RECEIVE_ADD_CONTACT:
      return [...contacts, action.payload.contact];

    case ActionType.RECEIVE_EDIT_CONTACT:
      const editedContact = action.payload.contact;
      const contactId = action.payload.contactId;

      const contactIndex = contacts.findIndex(
        (contact) => contact.id === contactId
      );

      if (contactIndex !== -1) {
        const updatedContacts = [...contacts];
        updatedContacts[contactIndex] = editedContact;
        return updatedContacts;
      }

      return contacts;

    case ActionType.RECEIVE_DELETE_CONTACT:
      const contactIdToDelete = action.payload;
      return contacts.filter((contact) => contact.id !== contactIdToDelete);

    default:
      return contacts;
  }
}

export default contactsReducer;
