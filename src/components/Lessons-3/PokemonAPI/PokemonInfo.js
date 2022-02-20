import axios from "axios";
import { Component } from "react/cjs/react.production.min";

axios.defaults.baseURL = "https://pokeapi.co/api/v2/pokemon/";

export default class PokemonInfo extends Component {
  state = {};

  async componentDidUpdate(prevProps, prevState) {
    const { pokemonName } = this.props;

    if (prevProps.pokemonName !== pokemonName) {
      const response = await axios.get(pokemonName);

      console.log(response);
    }
  }

  render() {
    return (
      <div>
        <h3>Pokemon info:</h3>
        <p>{this.props.pokemonName}</p>
      </div>
    );
  }
}
