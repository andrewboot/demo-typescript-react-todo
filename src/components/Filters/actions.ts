import { createAction } from 'redux-act';

export const applyFilter = createAction(
  'FILTERS/APPLY',
  (filterType: string) => filterType,
);
