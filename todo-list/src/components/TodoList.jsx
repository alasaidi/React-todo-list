/* eslint-disable react/prop-types */
import Items from "./Items";
const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul className="list">
      {todos.length === 0 && "no todos"}
      {todos.map((todo) => {
        return <Items {...todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />;
      })}
    </ul>
  );
};
export default TodoList;
