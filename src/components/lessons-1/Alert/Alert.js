import propTypes from "prop-types";
import s from "./Alert.module.css";

export default function Alert({ text, type }) {
  return (
    <p role="alert" className={s[type]}>
      {text}
    </p>
  );
}

Alert.propTypes = {
  text: propTypes.string.isRequired,
  type: propTypes.oneOf(["error", "warning", "success"]).isRequired,
};
