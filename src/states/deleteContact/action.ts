import { Dispatch } from "@reduxjs/toolkit";
import api from "../../utils/api";
import { receiveDeleteContactActionCreator } from "../contacts/action";

function asyncDeleteContact(contactId: string) {
  console.log("contact id in action : ", contactId);

  return async (dispatch: Dispatch) => {
    try {
      await api.deleteContact(contactId);
    } catch (error: any) {
      dispatch(receiveDeleteContactActionCreator(contactId));
    }
  };
}

export { asyncDeleteContact };
