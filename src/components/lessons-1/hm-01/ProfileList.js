import PropTypes from "prop-types";
import Profile from "./Profile";

export default function ProfileList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <Profile
            name={item.username}
            location={item.location}
            avatar={item.avatar}
            tag={item.tag}
            stats={item.stats}
          />
        </li>
      ))}
    </ul>
  );
}

ProfileList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired })
  ),
};
