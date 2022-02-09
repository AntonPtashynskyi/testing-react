import PropTypes from "prop-types";
import Profile from "./Profile";
import s from "./Profile.module.css";

export default function ProfileList({ items }) {
  return (
    <ul className={s.profileList}>
      {items.map(({ id, username, location, avatar, tag, stats }) => (
        <li key={id} className={s.profileItem}>
          <Profile
            username={username}
            location={location}
            avatar={avatar}
            tag={tag}
            stats={stats}
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
