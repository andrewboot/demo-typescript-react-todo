import filtersReducer, { FiltersState } from '../Filters/reducer';
import { combineReducers } from 'redux';
import todosReducer, { todosState } from '../Todos/reducer';

export type State = {
  todos: todosState,
  filters: FiltersState,
};

const rootReducer = combineReducers({
  todos: todosReducer,
  filters: filtersReducer,
});

export default rootReducer;
