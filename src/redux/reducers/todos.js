import { ADD_TODO, TOGGLE_TODO } from "../actionTypes";

export default function(state = [], action) {
  switch (action.type) {
    case ADD_TODO: {
      const { id, text, link } = action.payload;
      return [
        ...state,
        {
          id,
          text,
          link,
          completed: false
        }
      ];
    }
    case TOGGLE_TODO: {
      const { id } = action.payload;
      return state.map(({ id: existingId, completed, ...todo }) => (
        existingId === id
        ? { ...todo, id: existingId, completed: !completed }
        : { ...todo, id: existingId, completed }
      ));
    }
    default:
      return state;
  }
}
