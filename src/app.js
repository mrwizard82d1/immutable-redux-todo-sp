/**
 * Created by larryjones on 6/11/17.
 */

import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { ToDoList } from './containers';
import reducer from './reducer';

const store = createStore(reducer);

render(
  <Provider store={store}>
    <ToDoList />
  </Provider>,
  document.getElementById("app")
);
