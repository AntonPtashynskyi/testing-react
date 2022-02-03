
import defaultImage from "../../../image/default.png";


export default function User({ username = "не известно", url = defaultImage, followers, views, likes}) {
  return <div>
  <h2> {username}</h2>
  <img alt={username} src={url} width="150"/>
  <ul>
    <li>Followers: {followers}</li>
    <li>Views: {views}</li>
    <li>Likes: {likes}</li>
  </ul>
</div>
}