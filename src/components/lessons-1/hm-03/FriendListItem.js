import propTypes from "prop-types";
import imageDefault from "../../../image/default.png";

export default function Friends({ avatar = imageDefault, name, isOnline, id }) {
  return (
    <li className="item" key={id}>
      <span className="status">{isOnline ? "Online" : "Not available"}</span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

Friends.propTypes = {
  avatar: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  isOnline: propTypes.bool.isRequired,
};
