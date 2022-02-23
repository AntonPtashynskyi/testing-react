import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGalerry ";
import "./galleryCommon.css";

import { Component } from "react/cjs/react.production.min";
import { ToastContainer, toast } from "react-toastify";

export default class AppGallery extends Component {
  state = {
    searchValue: "",
  };

  handleSubmit = (searchValue) => {
    this.setState({ searchValue });
  };

  render() {
    const { searchValue } = this.state;

    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery value={searchValue} />
        <ToastContainer />
      </div>
    );
  }
}
