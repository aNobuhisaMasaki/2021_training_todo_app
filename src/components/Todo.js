import React from "react";
import { connect } from "react-redux";
import cx from "classnames";
import { toggleTodo, deleteTodo } from "../redux/actions";

const Todo = ({ todo, toggleTodo, deleteTodo }) => (
  <li className="todo-item">
    <span onClick={() => deleteTodo(todo.id)}>{"❎"}{" "}</span>
    <span
      className="todo-item__text"
      onClick={() => toggleTodo(todo.id)}
    >
      {todo && todo.completed ? "✅" : "🔴"}{" "}
      <span className={cx(todo && todo.completed && "todo-item__text--completed")}>
        {todo.text}
      </span>
    </span>
    {todo.link ? (<a href={todo.link} target="_blank">{todo.link}</a>) : null}
  </li>
);

// export default Todo;
export default connect(
  null,
  { toggleTodo, deleteTodo }
)(Todo);
