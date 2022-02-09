import propTypes from "prop-types";
import Friends from "./FriendListItem";
import s from "./FriendList.module.css";

export default function FriendList({ items }) {
  return (
    <ul className={s.friendList}>
      {items.map(({ id, avatar, name, isOnline }) => (
        <Friends key={id} avatar={avatar} name={name} isOnline={isOnline} />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: propTypes.arrayOf(propTypes.object),
  key: propTypes.number,
};
