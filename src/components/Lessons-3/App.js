import { ToastContainer, toast } from "react-toastify";
import { Component } from "react/cjs/react.production.min";

import Modal from "./Modal/Modal";
import Clock from "./CLock/Clock";

// Pokemon search
import Section from "components/Lessons-2/hw-01/Section/Section";
import PokemonForm from "./PokemonAPI/PokemonForm";
import PokemonInfo from "./PokemonAPI/PokemonInfo";

class App extends Component {
  state = {
    showModal: false,
    pokemonName: "",
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  handleFormSubmit = (pokemonName) => {
    this.setState({ pokemonName });
  };

  render() {
    const { pokemonName, showModal } = this.state;

    return (
      <Section>
        <Clock />
        <button
          type="button"
          className="statsBtn"
          onClick={this.toggleModal}
          style={{ width: 150 }}
        >
          Open modal
        </button>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <h2>Hello modal</h2>
            <p></p>
            <button type="button" onClick={this.toggleModal}>
              Close modal
            </button>
          </Modal>
        )}
        <PokemonForm onSubmit={this.handleFormSubmit} />
        <PokemonInfo pokemonName={pokemonName} />
        <ToastContainer position="top-center" autoClose={2000} />
      </Section>
    );
  }
}

export default App;
