import api from "../../utils/api";
import { receiveEditContactActionCreator } from "../contacts/action";
import Swal from "sweetalert2";
import { ContactInput } from "../../types/ContactInputTypes";
import { Dispatch } from "@reduxjs/toolkit";

function asyncEditContact(contact: ContactInput, contactId: string) {
  return async (dispatch: Dispatch) => {
    try {
      const response = await api.editContact(contact, contactId);

      if (!response.isError) {
        dispatch(receiveEditContactActionCreator(contact, contactId));
      }
    } catch (error: any) {
      Swal.fire({
        title: "Errpr!",
        text: error.message,
        icon: "error",
        background: "#edfdff",
      });
    }
  };
}

export { asyncEditContact };
