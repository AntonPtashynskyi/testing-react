import propTypes from "prop-types";
import Friends from "./FriendListItem";

export default function FriendList({ items }) {
  return (
    <ul className="friend-list">
      {items.map((item) => (
        <Friends
          key={item.id}
          avatar={item.avatar}
          name={item.name}
          isOnline={item.isOnline}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: propTypes.arrayOf(propTypes.object),
  key: propTypes.number,
};
