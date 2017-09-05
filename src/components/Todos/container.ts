import { State } from '../Root/reducer';
import { connect } from 'react-redux';
import { removeTodo, addTodo, toggleTodo, updateTodo } from './actions';
import TodosComponent from './component';
import { getFilteredTodos } from '../Filters/reducer';

const mapStateToProps = (state: State) => ({
  todos: getFilteredTodos(state),
});

const mapDispatchToProps = {
  removeTodo,
  addTodo,
  toggleTodo,
  updateTodo,
};

const Todos = connect(mapStateToProps, mapDispatchToProps)(TodosComponent);

export default Todos;
