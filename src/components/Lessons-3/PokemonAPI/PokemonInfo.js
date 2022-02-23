import { Component } from "react/cjs/react.production.min";

import PokemonErrorView from "./PokemonErrorView";
import PokemonDataView from "./PokemonDataView";
import PokemonPending from "./PokemonPending";
import api from "./PokemonAPI";

export default class PokemonInfo extends Component {
  state = {
    pokemon: null,
    error: null,
    status: "idle",
  };

  componentDidUpdate(prevProps, prevState) {
    const { pokemonName } = this.props;

    if (prevProps.pokemonName !== pokemonName) {
      this.setState({ status: "pending" });

      api
        .fetchPokemon(pokemonName)
        .then((pokemon) => this.setState({ pokemon, status: "resolved" }))
        .catch((error) => this.setState({ error, status: "rejected" }));
    }
  }

  render() {
    const { pokemon, error, status } = this.state;
    const { pokemonName } = this.props;

    if (status === "idle") {
      return <div>Enter Pokemon name</div>;
    }

    if (status === "pending") {
      return <PokemonPending pokemonName={pokemonName} />;
    }

    if (status === "rejected") {
      return <PokemonErrorView message={error.message} />;
    }

    if (status === "resolved") {
      return <PokemonDataView pokemon={pokemon} />;
    }
  }
}

// return (
//   <div>
//     {!pokemonName && <p>Enter Pokemon name</p>}
//     {error && <div>{error.message}</div>}
//     {loading && <div>Loading...</div>}
//     {pokemon && (
//       <div>
//         <p>{pokemon.name}</p>
//         <img
//           src={pokemon.sprites.other.home.front_default}
//           alt={pokemon.name}
//           width={200}
//         />
//       </div>
//     )}
//   </div>
// );
