// import types from "./contacts-types";
// import shortid from "shortid";

import { createAction } from "@reduxjs/toolkit";

const getContactsRequest = createAction("contacts/getContactsRequest");
const getContactsSuccess = createAction("contacts/getContactsSuccess");
const getContactsError = createAction("contacts/getContactsError");

const addContactsRequest = createAction("contacts/addContactsRequest");
const addContactsSuccess = createAction("contacts/addContactsSuccess");
const addContactsError = createAction("contacts/addContactsError");

const deleteContactsRequest = createAction("contacts/deleteContactsRequest");
const deleteContactsSuccess = createAction("contacts/deleteContactsSuccess");
const deleteContactsError = createAction("contacts/deleteContactsError");

// const deleteContact = createAction("contacts/delete");
const changeFilter = createAction("contacts/changeFilter");

//const addContact = createAction("contacts/add", (data) => {
//return {
//payload: {
//id: shortid.generate(),
//...data,
//},
//};
//});

const actions = {
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  deleteContactsRequest,
  deleteContactsSuccess,
  deleteContactsError,
  changeFilter,
};

export default actions;

//================================vanila redux
// const addContact = (data) => ({
//   type: types.ADD,
//   payload: {
//     id: shortid.generate(),
//     ...data,
//   },
// });

// const deleteContact = (contactId) => ({
//   type: types.DELETE,
//   payload: contactId,
// });

// const changeFilter = (value) => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
// });
