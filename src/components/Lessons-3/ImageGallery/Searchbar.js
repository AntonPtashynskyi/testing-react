import "./galleryCommon.css";

import { Component } from "react/cjs/react.production.min";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default class Searchbar extends Component {
  state = {
    inputtedValue: "",
  };

  handleInputValue = (e) => {
    this.setState({ inputtedValue: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.inputtedValue.trim() === "") {
      return toast.error("This field can not be empty");
    }

    this.props.onSubmit(this.state.inputtedValue);
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label"> Search</span>
          </button>

          <input
            onChange={this.handleInputValue}
            name="searchValue"
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
