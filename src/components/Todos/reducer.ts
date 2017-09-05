import { Todo } from '../../../types/todos';
import { createReducer } from 'redux-act';
import { addTodo, removeTodo, toggleTodo, updateTodo } from './actions';

export interface todosState {
  list: Todo[];
}

const defaultState = {
  list: [
    { id: '1', text: 'Buy groceries', completed: false },
    { id: '2', text: 'Feed the cat', completed: true },
    { id: '3', text: 'Take a nap', completed: false },
    { id: '4', text: 'Meditate', completed: true },
    { id: '5', text: 'Work', completed: false },
  ],
};

const todosReducer = createReducer({
  [addTodo]: (state, payload) => ({
    ...state,
    list: [payload, ...state.list],
  }),

  [removeTodo]: (state, payload) => ({
    ...state,
    list: state.list.filter(t => t.id !== payload),
  }),

  [toggleTodo]: (state, payload) => ({
    ...state,
    list: state.list.map((t) => {
      const currentTodo = t;
      if (currentTodo.id === payload) currentTodo.completed = !currentTodo.completed;
      return currentTodo;
    }),
  }),

  [updateTodo]: (state, payload) => ({
    ...state,
    list: state.list.map((t) => {
      const currentTodo = t;
      if (currentTodo.id === payload.id) currentTodo.text = payload.text;
      return currentTodo;
    }),
  }),

}, defaultState);


export default todosReducer;
