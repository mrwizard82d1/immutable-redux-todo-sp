/**
 * Created by larryjones on 6/11/17.
 */

import React from 'react';
import { render } from 'react-dom';
import { List, Map } from 'immutable';
import { ToDoList } from './components';

const dummyToDos = List([
  Map({ id: 0, isDone: true, text: 'make components' }),
  Map({ id: 1, isDone: false, text: 'design actions' }),
  Map({ id: 2, isDone: false, text: 'implement reducer' }),
  Map({ id: 3, isDone: false, text: 'connect components' }),
]);

render(
  <ToDoList toDos={ dummyToDos } />,
  document.getElementById("app")
);
