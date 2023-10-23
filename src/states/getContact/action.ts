import { Dispatch } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
import { receiveContactsActionCreator } from "../../states/contacts/action";
import api from "../../utils/api";

function asyncPopulateContacts() {
  return async (dispatch: Dispatch) => {
    try {
      const contact = await api.getAllContacts();

      dispatch(receiveContactsActionCreator(contact));
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

export { asyncPopulateContacts };
