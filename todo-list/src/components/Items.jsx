import "../App.css";

// eslint-disable-next-line react/prop-types
const Items = ({ id, title, completed, toggleTodo, deleteTodo }) => {
  return (
    <li>
      <label>
        <input type="checkbox" checked={completed} onChange={(e) => toggleTodo(id, e.target.checked)} />
        <span>{title}</span>
      </label>
      <button className="btn btn-danger" onClick={() => deleteTodo(id)}>
        Delete
      </button>
    </li>
  );
};

export default Items;
