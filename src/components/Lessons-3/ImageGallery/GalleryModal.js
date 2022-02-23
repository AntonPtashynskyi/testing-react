import { Component } from "react/cjs/react.production.min";
import { createPortal } from "react-dom";
import "./galleryCommon.css";

const modalRoot = document.getElementById("modal-root");

export default class GalleryModal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleEventListenerEscape);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleEventListenerEscape);
    document.body.style.overflow = "unset";
  }

  handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      this.props.onToggle();
    }
  };

  handleEventListenerEscape = (e) => {
    if (e.code === "Escape") {
      this.props.onToggle();
    }
  };
  render() {
    const { largeImage } = this.props;
    return createPortal(
      <div className="Overlay" onClick={this.handleBackdropClick}>
        <div className="Modal">
          <img src={largeImage} alt="largeImage" />
        </div>
      </div>,
      modalRoot
    );
  }
}
