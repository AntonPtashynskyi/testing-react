import errorImage from "../../../image/cry-cat.jpg";

export default function PokemonErrorView({ message }) {
  return (
    <div>
      <img src={errorImage} alt="cat" width={250} style={{ margin: 20 }} />
      <p>{message}</p>
    </div>
  );
}
