import React, { Component } from 'react';
import styled from 'styled-components';

const NewTodoContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`;

const NewTodoField = styled.input`
  flex: 1;
  border: none;
  border-top: 1px solid rgba(0,0,0,0.05);
  box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.2);
  border-radius: 3px;
  min-height: 25px;
  padding: 7px 8px;
`;

const AddTodoButton = styled.button`
  margin-left: 10px;
  min-height: 25px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  padding: 7px 8px;
  font-size: 16px;
  font-weight: 700;
  color: seagreen;
  border-radius: 3px;
  box-shadow: 0px 2px 3px 0px transparent;
  border-top: 1px solid transparent;
  transition: box-shadow .3s ease, border-top .3s ease;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.2);
    border-top: 1px solid rgba(0,0,0,0.05);
  }
`;

interface Props {
  addTodo: (text: string) => void;
}

class NewTodo extends Component<Props> {
  state = {
    todoText: '',
  };

  updateTodo = (e) => {
    this.setState({
      todoText: e.target.value,
    });
  }

  onAddButtonClick = (e) => {
    e.preventDefault();
    const { todoText } = this.state;
    const { addTodo } = this.props;
    if (todoText.length > 0) addTodo(todoText);
    this.updateTodo({ target: { value: '' } });
  }

  render () {
    const { addTodo } = this.props;
    const { todoText } = this.state;
    return (
      <NewTodoContainer>
        <NewTodoField value={todoText} onChange={this.updateTodo} />
        <AddTodoButton onClick={this.onAddButtonClick}>Add Todo</AddTodoButton>
      </NewTodoContainer>
    );
  }

}

export default NewTodo;
