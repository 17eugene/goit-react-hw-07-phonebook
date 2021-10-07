import { connect } from "react-redux";

import styles from "./Filter.module.css";
import contactsActions from "../redux/contacts/contacts-actions";

function Filter({ value, onChange }) {
  return (
    <div className={styles.filter_wrapper}>
      <label className={styles.filter_label}>
        Find contact by name
        <input
          type="text"
          name="filter"
          className={styles.filter_input}
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
}

const mapStateToProps = (state) => ({
  filter: state.contacts.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) =>
    dispatch(contactsActions.changeFilter(e.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
