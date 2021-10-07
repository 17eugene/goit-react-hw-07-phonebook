import { connect } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import contactsOperations from "../redux/contacts/contacts-operations";
import styles from "./ContactList.module.css";

function ContactList({ contacts, onDeleteContact }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.getContacts());
  }, [dispatch]);

  return (
    <ul className={styles.contact_list}>
      {contacts.map(({ info, id }) => (
        <li key={id} className={styles.contact}>
          <p>
            {info.name}: <span>{info.number}</span>
          </p>
          <button
            type="button"
            className={styles.delete_btn}
            onClick={() => {
              onDeleteContact(id);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

const getFiltredContacts = (allContacts, filter) => {
  const normalized = filter.toLowerCase();

  return allContacts.filter((contact) =>
    contact.info.name.toLowerCase().includes(normalized)
  );
};

const mapStateToProps = (state) => {
  const visibleContacts = getFiltredContacts(
    state.contacts.items,
    state.contacts.filter
  );
  return {
    contacts: visibleContacts,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onDeleteContact: (id) => dispatch(contactsOperations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
