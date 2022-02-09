import s from "./ColorPicker.module.css";

export default function ColorPicker({ options }) {
  return (
    <div className={s.container}>
      <h2 className={s.title}>Color Picker</h2>
      <div>
        {options.map((option) => (
          <span
            key={option.color}
            className={s.option}
            style={{ backgroundColor: option.color, color: "white" }}
          >
            {option.label}
          </span>
        ))}
      </div>
    </div>
  );
}
