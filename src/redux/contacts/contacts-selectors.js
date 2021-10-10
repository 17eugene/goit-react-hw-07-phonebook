export const getContacts = (state) => state.contacts.items;
export const getFilter = (state) => state.contacts.filter;

export const getFiltredContacts = (state) => {
  const contacts = getContacts(state);
  const filter = getFilter(state);
  const normalized = filter.toLowerCase();

  return contacts.filter((contact) =>
    contact.info.name.toLowerCase().includes(normalized)
  );
};
