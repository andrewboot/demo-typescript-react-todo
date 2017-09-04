import { Todo as TodoType } from '../../../types/todos';
import React from 'react';
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
  margin-top: 20px;
`;


interface Props {
  todos: TodoType[];
  addTodo: () => void;
  removeTodo: () => void;
}

const TodosComponent = ({
  todos,
  addTodo,
  removeTodo,
}: Props) => (
  <Container>
    <NewTodo addTodo={addTodo} />
    <List>
      {
        todos && Array.isArray(todos) && todos.length > 0 && todos.map(t => (
          <Todo key={t.id} {...t} removeTodo={removeTodo.bind(null, t.id)} />
        ))
      }
    </List>
  </Container>
);

export default TodosComponent;
