import { Component } from "react/cjs/react.production.min";
import s from "./ColorPicker.module.css";

// export default function ColorPicker({ options }) {
//   return (
//     <div className={s.container}>
//       <h2 className={s.title}>Color Picker</h2>
//       <div>
//         {options.map((option) => (
//           <span
//             key={option.color}
//             className={s.option}
//             style={{ backgroundColor: option.color, color: "white" }}
//           >
//             {option.label}
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// }

class ColorPickier extends Component {
  state = {
    activeOptionIndex: 1, //Храним идекс елемента в массиве
  };

  setActiveIndex = (index) => {
    this.setState({ activeOptionIndex: index });
  };

  makeOptionsClassName = (index) => {
    const optionClasses = [s.option];

    if (index === this.state.activeOptionIndex) {
      optionClasses.push(s.active);
    }

    return optionClasses.join(" ");
  };

  render() {
    const { activeOptionIndex } = this.state; //  деструктуризируем чтобы видеть что используеться из state
    const { options } = this.props; //            деструктуризируем чтобы видеть что используеться из props
    const { label } = options[activeOptionIndex]; // Вычисляемое свойство props.options приходят из вне.

    return (
      <div className={s.container}>
        <h2 className={s.title}>Color Picker</h2>
        <p>Color clicked: {label}</p>
        <div>
          {options.map(({ color, label }, index) => (
            <button
              key={color}
              className={this.makeOptionsClassName(index)}
              onClick={() => this.setActiveIndex(index)} // Передаем инлайн функцию (ЧЕРЕЗ ЗАМЫКАНМЕ доступен индекс)
              style={{
                backgroundColor: color,
                border:
                  index === activeOptionIndex ? "1px solid black" : "none",
              }}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}

export default ColorPickier;
