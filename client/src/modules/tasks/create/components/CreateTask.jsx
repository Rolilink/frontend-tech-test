import React from 'react';
import PropTypes from 'prop-types';
import LoadingMessage from '../../../common/LoadingMessage';
import ErrorMessage from '../../../common/ErrorMessage';
import TaskForm from '../../../common/TaskForm';

const getInitialState = () => ({
  task: {
    title: '',
    description: '',
  },
});

export default class CreateTask extends React.Component {
  static propTypes = {
    createTask: PropTypes.func.isRequired,
    changeMode: PropTypes.func.isRequired,
    className: PropTypes.string,
    isFetching: PropTypes.bool,
    error: PropTypes.any,
  }

  static defaultProps = {
    className: '',
    error: null,
    isFetching: false,
  }

  constructor(props) {
    super(props);
    this.state = getInitialState();
  }

  get taskForm() {
    const { className } = this.props;
    const { task } = this.state;

    return (
      <TaskForm
        className={`CreateTask-TaskForm ${className}`}
        onTitleUpdate={title => this.setState({ task: { title } })}
        onDescriptionUpdate={description => this.setState({ task: { description } })}
        onSubmit={() => this.submitTask()}
        onCancel={() => this.clearMode()}
        task={task}
      />
    );
  }

  getErrorMessage(error) {
    return (
      <div>{error}</div>
    );
  }

  getLoadingMessage() {
    return (
      <div>Creating Task</div>
    );
  }

  submitTask() {
    const { task } = this.state;

    this.props.createTask(task);
  }

  clearMode() {
    this.setState(getInitialState());
    this.props.changeMode(null);
  }

  render() {
    const { isFetching, error } = this.props;

    return (
      <LoadingMessage
        isLoading={isFetching}
        renderMessage={this.getLoadingMessage}
      >
        <ErrorMessage
          error={error}
          renderMessage={this.getErrorMessage}
        >
          {this.taskForm}
        </ErrorMessage>
      </LoadingMessage>
    );
  }
}
