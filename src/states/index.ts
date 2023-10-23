import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contacts/reducer";
import contactDetailReducer from "./getDetailContact/reducer";

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    contactDetail: contactDetailReducer,
  },
});

export default store;
