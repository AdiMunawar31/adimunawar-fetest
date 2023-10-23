import api from "../../utils/api";
import { receiveAddContactActionCreator } from "../contacts/action";
import { Dispatch } from "@reduxjs/toolkit";
import { ContactInput } from "../../types/ContactInputTypes";
import Swal from "sweetalert2";

function asyncAddContact(contact: ContactInput) {
  return async (dispatch: Dispatch) => {
    try {
      const response = await api.addContact(contact);

      if (!response.isError) {
        dispatch(receiveAddContactActionCreator(contact));
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

export { asyncAddContact };
