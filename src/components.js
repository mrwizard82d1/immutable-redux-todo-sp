/**
 * Created by larryjones on 6/10/17.
 */

import React from 'react';

export function ToDo({ toDo }) {
  // If this item is complete
  if (toDo.get('isDone')) {
    // Render using strikethrough
    return <strike>{ toDo.get('text') }</strike>
  } else {
    // Otherwise, render it in a span
    return <span>{ toDo.get('text') }</span>
  }
}

export function ToDoList({ toDos }) {
  return (
    <div className="todo">
      <input type="text" placeholder="Add ToDo" />
      <ul className="todo-list">
        {toDos.map((t) => (
          <li key={ t.get('id') } className="todo-list">
            <ToDo toDo={ t } />
          </li>
        ))}
      </ul>
    </div>
  );
}
