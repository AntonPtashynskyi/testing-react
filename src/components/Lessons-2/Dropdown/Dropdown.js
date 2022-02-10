import React from "react";
import { Component } from "react/cjs/react.production.min";
import "./Dropdown.css";

class Dropdown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState((prevState) => ({
      visible: !prevState.visible,
    }));
  };

  //   show = () => {
  //     this.setState({ visible: true });
  //   };

  //   hide = () => {
  //     this.setState({ visible: false });
  //   };

  render() {
    const { visible } = this.state;

    return (
      <div className="dropdown">
        <button
          type="button"
          className="toggle"
          onClick={this.toggle}
          //   onMouseOver={this.toggle}
        >
          {visible ? "hide" : "show"}
        </button>
        {/* <button type="button" className="toggle" onClick={this.hide}>
          Hide
        </button> */}
        {visible && <div className="dropMenu"> Dropdown menu</div>}
      </div>
    );
  }
}

export default Dropdown;
