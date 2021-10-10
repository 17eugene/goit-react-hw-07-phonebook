import { connect } from "react-redux";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFiltredContacts } from "../redux/contacts/contacts-selectors";

import contactsOperations from "../redux/contacts/contacts-operations";
import styles from "./ContactList.module.css";

function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getFiltredContacts);

  const onDeleteContact = (id) =>
    dispatch(contactsOperations.deleteContact(id));

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

// const mapStateToProps = (state) => {
//   const visibleContacts = getFiltredContacts(
//     state.contacts.items,
//     state.contacts.filter
//   );
//   return {
//     contacts: visibleContacts,
//   };
// };

// const mapDispatchToProps = (dispatch) => ({
//   onDeleteContact: (id) => dispatch(contactsOperations.deleteContact(id)),
// });

export default connect(null, null)(ContactList);
