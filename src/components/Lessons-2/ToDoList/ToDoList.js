import React from "react";
import "./ToDoList.css";

const ToDoList = ({ todos, onDeleteTodo }) => {
  return (
    <ul className="todo__list">
      {todos.map(({ text, id }) => (
        <li key={id} className="todo__item">
          <p>{text}</p>
          <button className="todo__btn" onClick={() => onDeleteTodo(id)}>
            DONE
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ToDoList;
