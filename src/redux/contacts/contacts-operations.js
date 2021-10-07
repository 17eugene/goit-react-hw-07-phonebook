import axios from "axios";

import actions from "./contacts-actions";

axios.defaults.baseURL = "http://localhost:3000/";

const getContacts = () => (dispatch) => {
  dispatch(actions.getContactsRequest);

  axios
    .get("/contacts")
    .then(({ data }) => dispatch(actions.getContactsSuccess(data)))
    .catch((error) => dispatch(actions.getContactsError(error)));
};

const addContact = (info) => (dispatch) => {
  const contact = {
    info,
  };
  dispatch(actions.addContactsRequest());

  axios
    .post("/contacts", contact)
    .then(({ data }) => dispatch(actions.addContactsSuccess(data)))
    .catch((error) => dispatch(actions.addContactsError(error)));
};

const deleteContact = (id) => (dispatch) => {
  dispatch(actions.deleteContactsRequest);

  axios
    .delete(`/contacts/${id}`)
    .then(dispatch(actions.deleteContactsSuccess(id)))
    .catch((error) => dispatch(actions.deleteContactsError(error)));
};

const operations = {
  getContacts,
  addContact,
  deleteContact,
};

export default operations;
