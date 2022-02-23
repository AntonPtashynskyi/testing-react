import { Component } from "react/cjs/react.production.min";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default class PokemonForm extends Component {
  state = {
    pokemonName: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.pokemonName.trim() === "") {
      return toast.error("Enter pokemon name");
    }

    this.props.onSubmit(this.state.pokemonName);
    this.setState({ pokemonName: "" });
  };

  handleNameChange = (e) => {
    this.setState({ pokemonName: e.currentTarget.value.toLowerCase() });
  };

  render() {
    const { pokemonName } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="pokemonName"
            value={pokemonName}
            onChange={this.handleNameChange}
          />
          <button type="submit">Find</button>
        </form>
      </div>
    );
  }
}
