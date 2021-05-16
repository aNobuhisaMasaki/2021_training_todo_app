import { ADD_TODO, TOGGLE_TODO } from "../actionTypes";

export default function(state = [], action) {
  switch (action.type) {
    case ADD_TODO: {
      const { id, content } = action.payload;
      return [
        ...state,
        {
          id,
          content,
          completed: false
        }
      ];
    }
    case TOGGLE_TODO: {
      const { id } = action.payload;
      return state.map(({ id: existingId, content, completed }) => (
        existingId === id
        ? { id: existingId, content, completed: !completed }
        : { id: existingId, content, completed }
      ));
    }
    default:
      return state;
  }
}
