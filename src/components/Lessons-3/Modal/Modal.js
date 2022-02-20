import "./Modal.css";

import { Component } from "react/cjs/react.production.min";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal-root");

export default class Modal extends Component {
  state = {};

  componentDidMount() {
    window.addEventListener("keydown", this.handleEventListener);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleEventListener);
  }

  handleEventListener = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };

  handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className="modalBackdrop" onClick={this.handleBackdropClick}>
        <div className="modalContent">{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}
