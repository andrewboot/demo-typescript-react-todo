import { State } from '../Root/reducer';
import { applyFilter } from './actions';
import { connect } from 'react-redux';
import FiltersComponent from './component';

const mapStateToProps = (state: State) => ({
  applied: state.filters.appliedFilter,
});

const Filters = connect(mapStateToProps, { applyFilter })(FiltersComponent);

export default Filters;
