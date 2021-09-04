import PropTypes from "prop-types";
import s from "./ContactList.module.css";
import FormButton from "./../FormButton/FormButton";

const ContactList = ({ contacts, removeContact }) => {
  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.listItem}>
          <span className={s.listName}>{name}</span>
          <span className={s.listNumber}>{number}</span>
          <FormButton label="Remove" onClick={() => removeContact(id)} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.array,
  removeContact: PropTypes.func,
};
