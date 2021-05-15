import { ADD_TODO, TOGGLE_TODO, SET_FILTER } from "./actionTypes";

let nextTodoId = 0;

const createImportedContent = (activity, link) =>
  [
    activity,
    link ? `(${link})` : '',
  ].join(' ');

export const importTodo = content => dispatch =>
  fetch('https://www.boredapi.com/api/activity/')
  .then(response => response.json())
  .then(({ activity, link }) => dispatch(
    addTodo(createImportedContent(activity, link))
  ));

export const addTodo = content => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content
  }
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: { id }
});

export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });
