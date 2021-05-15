import React from "react";
import { connect } from "react-redux";
import cx from "classnames";
import { toggleTodo } from "../redux/actions";

const Todo = ({ todo, toggleTodo }) => (
  <li className="todo-item">
    <span
      className={cx(
        "todo-item__text",
        todo && todo.completed && "todo-item__text--completed"
      )}
      onClick={() => toggleTodo(todo.id)}
    >
      {todo && todo.completed ? "✅" : "🔴"}{" "}
      {todo.text}
    </span>
    {todo.link ? (<a href={todo.link} target="_blank">{todo.link}</a>) : null}
  </li>
);

// export default Todo;
export default connect(
  null,
  { toggleTodo }
)(Todo);
