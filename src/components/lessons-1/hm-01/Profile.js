import PropTypes from "prop-types";
import imageDefault from "../../../image/default.png";

export default function Profile({
  id,
  name,
  location,
  avatar = imageDefault,
  tag,
  stats: { followers, views, likes },
}) {
  return (
    <div className="profile" key={id}>
      <div className="description">
        <img src={avatar} alt={name} className="avatar" width={200} />
        <p className="name">{name}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers: </span>
          <span className="quantity">{followers}</span>
        </li>
        <li>
          <span className="label">Views: </span>
          <span className="quantity">{views}</span>
        </li>
        <li>
          <span className="label">Likes: </span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number),
};
