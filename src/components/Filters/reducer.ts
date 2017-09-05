import { State } from '../Root/reducer';
import { createReducer } from 'redux-act';
import { FilterType } from '../../../types/filters';
import { applyFilter } from './actions';

export interface FiltersState {
  appliedFilter: FilterType;
}

const defaultState = {
  appliedFilter: 'all',
};

const filtersReducer = createReducer({
  [applyFilter]: (state, payload) => ({
    ...state,
    appliedFilter: payload,
  }),

}, defaultState);

export default filtersReducer;

export const getFilteredTodos = (state: State) => {
  const filter = state.filters.appliedFilter;
  const allTodos = state.todos.list;

  if (filter === 'active') {
    return allTodos.filter(t => !t.completed);
  } else if (filter === 'completed') {
    return allTodos.filter(t => t.completed);
  } else {
    return allTodos;
  }
};
