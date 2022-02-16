import Form from "components/Lessons-2/hw-02/Form/Form";
import Section from "components/Lessons-2/hw-01/Section/Section";

const { Component } = require("react/cjs/react.production.min");

class PhoneBook extends Component {
  render() {
    return (
      <Section title="PhoneBook">
        <Form />
      </Section>
    );
  }
}

export default PhoneBook;
