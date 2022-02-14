import { nanoid } from "nanoid";
import PhoneBook from "../PhoneBook/PhoneBook";
import Filter from "../Filter/Filter";
import "../Common.css";
const { Component } = require("react/cjs/react.production.min");

class Form extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    name: "",
    number: "",
    filter: "",
  };

  handleNameChange = (e) => {
    this.setState({ name: e.currentTarget.value });
  };

  handleNumberChange = (e) => {
    this.setState({ number: e.currentTarget.value });
  };

  handleFilterChange = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  handleSubmit = (e) => {
    const { name, contacts, number } = this.state;
    e.preventDefault();
    const savedContacts = contacts;
    const uniqId = nanoid();

    savedContacts.push({ id: { uniqId }, name: name, number: number });
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, contacts, number, filter } = this.state;

    return (
      <section>
        <form onSubmit={this.handleSubmit} className="phoneForm">
          <label className="formLabel">
            <span className="formName">Name:</span>
            <input
              className="formInput"
              value={name}
              onChange={this.handleNameChange}
              name="name"
              type="text"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <br></br>
          <label className="formLabel">
            <span className="formName">Phone number:</span>

            <input
              className="formInput"
              value={number}
              onChange={this.handleNumberChange}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <br></br>

          <button type="submit" className="formBtn">
            Add contact
          </button>
        </form>
        <Filter filter={filter} onFilter={this.handleFilterChange} />
        <PhoneBook contacts={contacts} number={number} title="Contact" />
      </section>
    );
  }
}

export default Form;
