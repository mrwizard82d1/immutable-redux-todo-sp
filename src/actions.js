/**
 * Created by larryjones on 6/11/17.
 */

// Succinct hack for generating passable unique ids
const uid = () => Math.random().toString(34).slice(2);

export function addToDo(text) {
  return {
    type: 'ADD_TODO',
    payload: {
      id: uid(),
      isDone: false,
      text,
    },
  };
}

export function toggleToDo(id) {
  return {
    type: 'TOGGLE_TODO',
    payload: id,
  };
}
