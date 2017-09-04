import { Todo } from '../../../types/todos';
import { createReducer } from 'redux-act';
import { addTodo, removeTodo } from './actions';

export interface todosState {
  list: Todo[];
}

const defaultState = {
  list: [
    { id: '1', text: 'Todo Sample 1' },
    { id: '2', text: 'Todo Sample 2' },
    { id: '3', text: 'Todo Sample 3' },
    { id: '4', text: 'Todo Sample 4' },
    { id: '5', text: 'Todo Sample 5' },
    { id: '6', text: 'Todo Sample 6' },
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

}, defaultState);


export default todosReducer;
