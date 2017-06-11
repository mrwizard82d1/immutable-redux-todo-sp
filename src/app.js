/**
 * Created by larryjones on 6/11/17.
 */

import React from 'react';
import { render } from 'react-dom';
import { ToDoList } from './components';

const dummyToDos = [
  { id: 0, isDone: true, text: 'make components' },
  { id: 1, isDone: false, text: 'design actions' },
  { id: 2, isDone: false, text: 'implement reducer' },
  { id: 3, isDone: false, text: 'connect components' },
];

render(
  <ToDoList toDos={ dummyToDos } />,
  document.getElementById("app")
);
