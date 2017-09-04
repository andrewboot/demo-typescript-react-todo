import { combineReducers } from 'redux';
import todosReducer, { todosState } from '../Todos/reducer';

export type State = {
  todos: todosState,
};

const rootReducer = combineReducers({
  todos: todosReducer,
});

export default rootReducer;
