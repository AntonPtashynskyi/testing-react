const { Component } = require("react/cjs/react.production.min");

class Form extends Component {
  state = {
    name: "",
    tag: "",
    experience: "junior",
    license: false,
  };

  handleChange = (e) => {
    const { name, value } = e.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.reset();
  };

  handleLicenseChange = (e) => {
    this.setState({ license: e.currentTarget.checked });
  };

  reset = () => {
    this.setState({
      name: "",
      tag: "",
    });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <p>Form </p>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <br></br>

          <label>
            Nick Name
            <input
              type="text"
              name="tag"
              value={this.state.tag}
              onChange={this.handleChange}
            />
          </label>
          <p>Coding vale</p>
          <label>
            Junior
            <input
              type="radio"
              name="experience"
              value="junior"
              checked={this.state.experience === "junior"}
              onChange={this.handleChange}
            />
            <br></br>
          </label>
          <label>
            Middle
            <input
              type="radio"
              name="experience"
              value="middle"
              checked={this.state.experience === "middle"}
              onChange={this.handleChange}
            />
          </label>
          <br></br>

          <label>
            Senior
            <input
              type="radio"
              name="experience"
              value="senior"
              checked={this.state.experience === "senior"}
              onChange={this.handleChange}
            />
          </label>
          <br></br>

          <label>
            I agree!
            <input
              type="radio"
              name="license"
              checked={this.state.license}
              onChange={this.handleLicenseChange}
            />
          </label>

          <button type="submit" disabled={!this.state.license}>
            Send
          </button>
        </form>
      </>
    );
  }
}

export default Form;
