import propTypes from "prop-types";
import s from "./Statistics.module.css";

export default function Statistics({ title, items }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.statList}>
        {items.map(({ id, label, percentage }) => {
          const randomColor = Math.floor(Math.random() * 16777215).toString(16);

          return (
            <li
              className={s.item}
              key={id}
              style={{ backgroundColor: `#${randomColor}` }}
            >
              <span className={s.label}>{label}</span>
              <span className="percentage">{percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  id: propTypes.string,
  label: propTypes.string,
  percentage: propTypes.number,
};
