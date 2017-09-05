import { createAction } from 'redux-act';
import v4 from 'uuid/v4';

export const addTodo = createAction(
  'TODOS/ADD',
  (text: string) => ({
    text,
    id: v4(),
  }),
);

export const removeTodo = createAction(
  'TODOS/REMOVE',
  (id: string) => id,
);

export const toggleTodo = createAction(
  'TODOS/TOGGLE',
  (id: string) => id,
);

export const updateTodo = createAction(
  'TODOS/UPDATE',
  ({ id, text }: { id: string; text: string; }) => ({ id, text }),
);
