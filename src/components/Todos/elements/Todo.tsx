import React from 'react';
import styled from 'styled-components';
import { Todo as TodoType } from '../../../../types/todos';

const TodoContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding: 5px 10px;
  border-bottom: 1px solid rgba(0,0,0,0.15);
`;

const TodoText = styled.span`
  flex: 1;
  text-overflow: ellipsis;
`;

const RemoveTodoButton = styled.button`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  min-height: 15px;
  min-width: 15px;
  background: none;
  border: none;
  box-shadow: 0px 0px 1px 0px rgba(0,0,0,0.2);
  font-size: 18px;
  border-radius: 50%;
  transition: box-shadow .3s ease;
  will-change: box-shadow;
  color: dimgray;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.4);
  }
`;

const Todo = (props: TodoType & { key?: string; removeTodo?: () => void }) => (
  <TodoContainer>
    <TodoText>{props.text}</TodoText>
    <RemoveTodoButton onClick={props.removeTodo}>x</RemoveTodoButton>
  </TodoContainer>
);

export default Todo;
