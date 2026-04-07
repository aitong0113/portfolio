export default function TagFilter({ tags, selected, onSelect }) {
  return (
    <div className="tag-filter">
      {tags.map(tag => (
        <button
          key={tag}
          className={selected === tag ? "active" : ""}
          onClick={() => onSelect(tag)}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
