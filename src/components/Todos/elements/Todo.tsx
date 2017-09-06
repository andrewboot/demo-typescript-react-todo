// tslint:disable:max-line-length
import React, { Component } from 'react';
import styled from 'styled-components';
import { Todo as TodoType } from '../../../../types/todos';

const TodoContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding: 5px 10px;
  border-bottom: 1px solid rgba(0,0,0,0.15);
`;

const CheckboxButton = styled.button`
  border: 1px solid black;
  border-radius: 3px;
  background: none;
  width: 15px;
  height: 15px;
  margin-right: 10px;
  transition: border .2s ease, background-color .2s ease;
  outline: none;
  padding: 0;

  &[data-completed=true] {
    border: 1px solid rgba(0,0,0,0.4);
    background-color: rgba(0,0,0,0.05);
  }

  &:hover {
    cursor: pointer;
  }
`;

const Icon = styled.svg`
  width: 12px;
  height: 12px;
  fill: rgba(0,0,0,0.3);
  outline: none;
`;

const TodoText = styled.input`
  border: none;
  background: none;
  flex: 1;
  text-overflow: ellipsis;
  color: black;
  transition: color .2s ease;
  font-size: 16px;
  outline: none;
  border-bottom: 1px solid transparent;
  margin-top: 1px;

  &[data-completed=true] {
    color: dimgray;
    text-decoration: line-through;
    text-decoration-color: rgba(0,0,0,0.3);
    font-style: oblique;
  }

  &:focus {
    border-bottom: 1px solid rgba(0,0,0,0.4);
  }
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
  margin-left: 10px;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.4);
  }
`;

type Props = TodoType & {
  key?: string;
  removeTodo?: () => void;
  toggleTodo?: () => void;
  updateTodo?: (info: { id: string, text: string }) => void;
};

class Todo extends Component<Props> {
  _updateTodo = (e) => {
    const { id, updateTodo } = this.props;
    updateTodo({
      id,
      text: e.target.value,
    });
  }

  render() {
    const props = this.props;

    return (
      <TodoContainer>
        <CheckboxButton onClick={props.toggleTodo} data-completed={props.completed}>
          {
            props.completed &&
            <Icon viewBox="0 0 40 40">
              <g>
                <path d="m37.3 12.6q0 0.9-0.6 1.6l-19.2 19.1q-0.6 0.7-1.5 0.7t-1.6-0.7l-11.1-11.1q-0.6-0.6-0.6-1.5t0.6-1.5l3.1-3q0.6-0.7 1.5-0.7t1.5 0.7l6.6 6.5 14.6-14.6q0.6-0.6 1.5-0.6t1.5 0.6l3.1 3q0.6 0.6 0.6 1.5z" />
              </g>
            </Icon>
          }
        </CheckboxButton>
        <TodoText
          data-completed={props.completed}
          value={props.text}
          onChange={this._updateTodo}
          spellCheck={false}
        />
        <RemoveTodoButton onClick={props.removeTodo}>x</RemoveTodoButton>
      </TodoContainer>
    );
  }
}

export default Todo;
