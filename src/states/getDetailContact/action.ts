import { Dispatch } from "@reduxjs/toolkit";
import { Contact } from "../../types/ContactTypes";
import api from "../../utils/api";
import Swal from "sweetalert2";

const ActionType = {
  RECEIVE_CONTACT_DETAIL: "RECEIVE_CONTACT_DETAIL",
};

function receiveContactDetailActionCreator(contactDetail: Contact) {
  return {
    type: ActionType.RECEIVE_CONTACT_DETAIL,
    payload: {
      contactDetail,
    },
  };
}

function asyncReceiveContactDetail(contactId: any) {
  return async (dispatch: Dispatch) => {
    try {
      const contactDetail = await api.getContactDetail(contactId);
      dispatch(receiveContactDetailActionCreator(contactDetail));
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

export {
  ActionType,
  receiveContactDetailActionCreator,
  asyncReceiveContactDetail,
};
