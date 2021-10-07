import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000/";

const fetchContacts = () => {
  return axios.get("/contacts").then((response) => response.data);
};

const addContact = (contact) => {
  return axios.post("contscts", contact).then(({ data }) => data);
};

const deleteContact = (contactId) => {
  return axios.delete(`/contscts/${contactId}`);
};

const apiService = {
  fetchContacts,
  addContact,
  deleteContact,
};

export default apiService;
