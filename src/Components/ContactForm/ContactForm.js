import React, { Component } from "react";
import PropTypes from "prop-types";
import s from "./ContactForm.module.css";
import FormButton from "../FormButton/FormButton";
import { v1 as uuid } from "uuid";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };
  handleInputChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const contacts = {
      id: uuid(),
      name: this.state.name,
      number: this.state.number,
    };

    this.props.onSubmit(contacts);
    console.log(this.state);

    this.reset();
  };
  reset() {
    this.setState({ name: "", number: "" });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className={s.form}>
          <label className={s.formItem}>
            Name
            <input
              className={s.formInput}
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
          </label>
          <label className={s.formItem}>
            Number
            <input
              className={s.formInput}
              name="number"
              type="tel"
              value={this.state.number}
              onChange={this.handleInputChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
            />
          </label>
          <FormButton type="submit" className={s.formBtn} label="Add contact" />
        </form>
      </div>
    );
  }
}

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};
