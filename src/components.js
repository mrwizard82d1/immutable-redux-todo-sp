/**
 * Created by larryjones on 6/10/17.
 */

import React from 'react';
import { addToDo, toggleClick } from './reducer';

export function ToDo({ toDo }) {
  // If this item is complete
  if (toDo.isDone) {
    // Render using strike-through
    return <strike>{ toDo.text }</strike>
  } else {
    // Otherwise, render it in a span
    return <span>{ toDo.text }</span>
  }
}

export function ToDoList({ toDos, toggleToDo, addToDo }) {
  const onSubmit = (event) => {
    const input = event.target;
    const text = input .value;
    const isEnterKey = (event.which == 13);
    const isLongEnough = text.length > 0;
    
    if (isEnterKey && isLongEnough) {
      input.value = '';
      addToDo(text);
    };
  };
  
  // An unusual construct: `toggleClick` is a function of `id` that returns *a function* of
  // an `event` that invokes the reducer, `toggleClick`.
  //
  // We can use this unusual construct because:
  //
  // - The event handler for `onClick` uses no data from the passed `event`
  // - Its binding, to the `onClick` event, suffices to indicate what it does.
  const toggleClick = id => event => toggleToDo(id);
  
  return (
    <div className="todo">
      <input type="text"
             className="todo-entry"
             placeholder="Add ToDo"
             onKeyDown={onSubmit} />
      <ul className="todo-list">
        {toDos.map((t) => (
          <li key={ t.get('id') }
              className="todo-list"
              onClick={toggleClick(t.get('id'))}>
            <ToDo toDo={ t.toJS() } />
          </li>
        ))}
      </ul>
    </div>
  );
}
