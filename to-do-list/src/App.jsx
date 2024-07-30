import "./App.css";
import React, { useState } from "react";
import Items from "./components/Items.jsx";

function App() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);
  // handle submit function
  function handleSubmit(e) {
    e.preventDefault();
    setTodos((currentTodos) => {
      return [...currentTodos, { id: crypto.randomUUID(), title: newItem, completed: false }];
    });
    setNewItem("");
  }
  console.log(todos);
  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: completed };
        }
        return todo;
      });
    });
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input value={newItem} onChange={(e) => setNewItem(e.target.value)} type="text" id="item" placeholder="Item Name" />
        </div>
        <button type="submit" className="btn">
          Add
        </button>
      </form>
      <h1 className="header">to do list</h1>
      <ul className="list">
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label>
                <input type="checkbox" checked={todo.completed} onChange={(e) => toggleTodo(todo.id, e.target.checked)} />
                <span>{todo.title}</span>
              </label>
              <button className="btn btn-danger"> Delete</button>
            </li>
          );
          // <Items itemValue={todo.title} key={todo.id} checkedValue={todo.completed} />
        })}
      </ul>
    </>
  );
}

export default App;
