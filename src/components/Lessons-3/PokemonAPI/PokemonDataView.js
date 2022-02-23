export default function PokemonDataView({ pokemon: { name, sprites, stats } }) {
  return (
    <div>
      <img src={sprites.other.home.front_default} alt={name} width={200} />
      <p>{name}</p>
      <ul>
        {stats.map((item) => (
          <li key={item.stat.name}>
            {item.stat.name}: {item.base_stat}
          </li>
        ))}
      </ul>
    </div>
  );
}
