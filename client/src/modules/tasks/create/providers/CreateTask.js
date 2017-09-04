import { connect } from 'react-redux';
import { createTask, selectors } from '../../redux/';

const { getCreateTaskProps } = selectors;

function mapStateToProps(state) {
  return getCreateTaskProps(state);
}

const mapDispatchToProps = {
  createTask,
};

export default connect(mapStateToProps, mapDispatchToProps);
