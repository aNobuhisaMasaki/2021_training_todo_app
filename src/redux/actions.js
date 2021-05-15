import { ADD_TODO, TOGGLE_TODO, SET_FILTER, DELETE_TODO } from "./actionTypes";

let nextTodoId = 0;

export const importTodo = content => dispatch =>
  fetch('https://www.boredapi.com/api/activity/')
  .then(response => response.json())
  .then(({ activity, link }) => dispatch(
    addTodo(activity, link)
  ));

export const addTodo = (text, link) => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    text,
    link
  }
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: { id }
});

export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });

export const deleteTodo = id => ({
  type: DELETE_TODO,
  payload: { id }
});
