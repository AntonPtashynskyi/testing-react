import React from "react";
import s from "./Counter.module.css";
import Control from "./Control";

class Counter extends React.Component {
  //   constructor() {
  //     super();

  //     this.state = {
  //       value: 0,
  //     };
  //   }  babel переписывает простой обьект state в конструктор класса

  static defaultProps = {
    initialValue: 0,
  };

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    // this.state.value = 1; DON'N DO LIKE THIS!!!!!!!!!!!
    // this.setState({ value: 10 }); для презаписи свойства
    this.setState((prevState) => ({
      value: prevState.value + 1,
    }));
  };

  handleDecrement = () => {
    this.setState((prevState) => ({
      value: prevState.value - 1,
    }));
  };

  render() {
    const { value } = this.state;
    return (
      <div className={s.box}>
        <span className={s.value}>{value}</span>

        <Control
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

export default Counter;
