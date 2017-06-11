/**
 * Created by larryjones on 6/11/17.
 */

import { List, fromJS } from 'immutable';

// Hmmm. We do not need `new`. Interesting...
const init = List([]);

export default function(toDos=init, action) {
  switch(action.type) {
    case 'ADD_TODO':
      return toDos.push(fromJS(action.payload));
      break;
    case 'TOGGLE_TODO':
      return toDos.map(t => {
        if (t.get('id') === action.payload) {
          return t.update('isDone', isDone  => !isDone);
        } else {
          return t;
        };
      });
      break;
    default:
      return toDos;
      return;
  };
}
