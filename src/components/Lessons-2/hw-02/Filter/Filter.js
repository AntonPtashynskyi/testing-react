import "../Common.css";

export default function Filter({ filter, onFilter }) {
  return (
    <label className="filterLabel">
      Find contacts by name:
      <input name="filter" value={filter} onChange={onFilter} />
    </label>
  );
}
