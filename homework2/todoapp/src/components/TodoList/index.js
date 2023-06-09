import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggle, destroy, selectTodos } from "../../redux/todos/todosSlice";

function TodoList() {
  const dispatch = useDispatch();
  let items = useSelector(selectTodos);
   
  const activeFilter = useSelector((state) => state.todos.activeFilter);

  const handleDestroy = (id) => {
    dispatch(destroy(id));
  };

  if (activeFilter !== "all") {
    items = items.filter((todo) =>
      activeFilter === "active"
        ? todo.completed === false && todo
        : todo.completed === true && todo
    );
  }
  return (
    <ul className="todo-list">
      {items.map((item) => (
        <li key={item.id} className={item.completed ? "completed" : ""}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              checked={item.completed}
              onChange={() => dispatch(toggle({ id: item.id }))}
            />
            <label>{item.title}</label>
            <button
              className="destroy"
              onClick={() => handleDestroy(item.id)}
            ></button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
