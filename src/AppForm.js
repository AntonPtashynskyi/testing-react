import Form from "components/Lessons-2/Form - lessons/Component/FormComponent";
import { Component } from "react/cjs/react.production.min";

class AppForm extends Component {
  state = {};

  formSubmitHandler = (data) => {
    console.log(data);
  };

  render() {
    return <Form onSubmit={this.formSubmitHandler} />;
  }
}

export default AppForm;
