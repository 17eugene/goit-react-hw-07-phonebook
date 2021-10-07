import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
// import types from "./contacts-types";

import actions from "./contacts-actions";

const itemsReducer = createReducer([], {
  [actions.getContactsSuccess]: (_, action) => action.payload,
  [actions.addContactsSuccess]: (state, action) => {
    return [action.payload, ...state];
  },

  [actions.deleteContactsSuccess]: (state, action) =>
    state.filter((contact) => contact.id !== action.payload),
});

const filterReducer = createReducer("", {
  [actions.changeFilter]: (_, action) => action.payload,
});

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

//========================vanila redux
// const itemsReducer = (state = [], action) => {
//   switch (action.type) {
//     case types.ADD:
//       if (
//         state.find(
//           (contact) =>
//             contact.number === action.payload.number ||
//             contact.name.toLowerCase() === action.payload.name.toLowerCase()
//         )
//       ) {
//         alert("Contact already exist!");
//         return;
//       }
//       return [action.payload, ...state];

//     case types.DELETE:
//       return state.filter((contact) => contact.id !== action.payload);

//     default:
//       return state;
//   }
// };

// const filterReducer = (state = "", action) => {
//   switch (action.type) {
//     case "contacts/changeFilter":
//       return action.payload;

//     default:
//       return state;
//   }
// };
