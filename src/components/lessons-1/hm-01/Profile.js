import PropTypes from "prop-types";
import imageDefault from "image/default.png";
import s from "./Profile.module.css";

export default function Profile({
  id,
  username,
  location,
  avatar = imageDefault,
  tag,
  stats: { followers, views, likes },
}) {
  return (
    <div className={s.profile} key={id}>
      <div className={s.description}>
        <img src={avatar} alt={username} className={s.avatar} width={200} />
        <p className={s.name}>{username}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className={s.stats}>
        <li className={s.label}>
          <span>Followers: </span>
          <span className="quantity">{followers}</span>
        </li>
        <li className={s.label}>
          <span className="label">Views: </span>
          <span className="quantity">{views}</span>
        </li>
        <li className={s.label}>
          <span className="label">Likes: </span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number),
};
