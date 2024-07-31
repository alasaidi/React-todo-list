import { useState } from "react";
// eslint-disable-next-line react/prop-types
const TodoForm = ({ onSubmit }) => {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;

    onSubmit(newItem);

    setNewItem("");
  }
  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input value={newItem} onChange={(e) => setNewItem(e.target.value)} type="text" id="item" placeholder="Item Name" />
      </div>
      <button type="submit" className="btn">
        Add
      </button>
    </form>
  );
};
export default TodoForm;
