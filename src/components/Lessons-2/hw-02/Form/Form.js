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

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    const { name, contacts, number } = this.state;
    e.preventDefault();
    const uniqId = nanoid();

    const contactName = contacts.map((contact) => contact.name);

    if (contactName.includes(name)) {
      alert(`${name} is already in library`);
    } else {
      contacts.push({ id: uniqId, name: name, number: number });
      this.setState({ name: "", number: "" });
    }
  };

  getFilteredContacts = () => {
    const normalizedFilter = this.state.filter.toLocaleLowerCase();
    return this.state.contacts.filter((contact) =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = (id) => {
    const { contacts } = this.state;

    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((item) => item.id !== id),
    }));
  };

  render() {
    const { name, number, filter } = this.state;

    return (
      <section>
        <form onSubmit={this.handleSubmit} className="phoneForm">
          <label className="formLabel">
            <span className="formName">Name:</span>
            <input
              className="formInput"
              value={name}
              onChange={this.handleChange}
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
              onChange={this.handleChange}
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
        <Filter filter={filter} onFilter={this.handleChange} />
        <PhoneBook
          deleteContact={this.deleteContact}
          contacts={this.getFilteredContacts()}
          number={number}
          title="Contact"
        />
      </section>
    );
  }
}

export default Form;
