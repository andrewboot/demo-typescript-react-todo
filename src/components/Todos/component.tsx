import { toggleTodo, updateTodo } from './actions';
import { Todo as TodoType } from '../../../types/todos';
import React from 'react';
import Filters from '../Filters';
import styled from 'styled-components';

import NewTodo from './elements/NewTodo';
import Todo from './elements/Todo';

const Container = styled.div`
  margin: 100px auto 0;
  diplay: flex;
  flex-flow: column nowrap;
  max-width: 450px;
`;

const List = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin-top: 10px;
`;


interface Props {
  todos: TodoType[];
  addTodo: () => void;
  removeTodo: () => void;
  toggleTodo: () => void;
  updateTodo: () => void;
}

const TodosComponent = ({
  todos,
  addTodo,
  removeTodo,
  toggleTodo,
  updateTodo,
}: Props) => (
  <Container>
    <NewTodo addTodo={addTodo} />
    <Filters />
    <List>
      {
        todos && Array.isArray(todos) && todos.length > 0 && todos.map(t => (
          <Todo
            key={t.id}
            {...t}
            removeTodo={removeTodo.bind(null, t.id)}
            toggleTodo={toggleTodo.bind(null, t.id)}
            updateTodo={updateTodo}
          />
        ))
      }
    </List>
  </Container>
);

export default TodosComponent;
