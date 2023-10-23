import { ActionType } from "./action";

function contactDetailReducer(contactDetail: any = [], action: any): any[] {
  switch (action.type) {
    case ActionType.RECEIVE_CONTACT_DETAIL:
      return action.payload.contactDetail;
    default:
      return contactDetail;
  }
}

export default contactDetailReducer;
