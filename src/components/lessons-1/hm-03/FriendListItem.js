import propTypes from "prop-types";
import imageDefault from "image/default.png";
import s from "./FriendList.module.css";

export default function Friends({ avatar = imageDefault, name, isOnline, id }) {
  return (
    <li className={s.item} key={id}>
      <span className={isOnline ? s.statusOnline : s.statusOffline}></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

Friends.propTypes = {
  avatar: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  isOnline: propTypes.bool.isRequired,
};
