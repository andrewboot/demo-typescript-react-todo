import { State } from '../Root/reducer';
import { connect } from 'react-redux';
import { removeTodo, addTodo } from './actions';
import TodosComponent from './component';

const mapStateToProps = (state: State) => ({
  todos: state.todos.list,
});

const mapDispatchToProps = {
  removeTodo,
  addTodo,
};

const Todos = connect(mapStateToProps, mapDispatchToProps)(TodosComponent);

export default Todos;
