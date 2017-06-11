/**
 * Created by larryjones on 6/11/17.
 */

import { connect } from 'react-redux';
import * as components from './components';
import { addToDo, toggleToDo } from './actions';

export const ToDoList = connect(
  // Define `mapStateToProps` and `mapDispatchToProps` in line
  function mapStateToProps(state) {
    // The entire application state is the to-do list.
    return { toDos: state };
  },
  function mapDispatchToProps(dispatch){
    // Return an object mapping our two actions
    return {
      // `addToDo` is a function of `text` that invokes `dispatch` on the `addToDo` action
      addToDo: text => dispatch(addToDo(text)),
      // `toggleToDo` is a function of `id` that invokes `dispatch` on the `toggleToDo` action
      toggleToDo: id => dispatch(toggleToDo(id)),
    };
  }
)(components.ToDoList);
