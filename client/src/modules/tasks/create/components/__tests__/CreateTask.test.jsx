import React from 'react';
import { shallow } from 'enzyme';

import CreateTask from '../CreateTask';
import TaskForm from '../../../../common/TaskForm';
import ErrorMessage from '../../../../common/ErrorMessage';
import LoadingMessage from '../../../../common/LoadingMessage';


describe('Tasks.Create.CreateTask', () => {
  let createTask;
  let changeMode;
  let isFetching;
  let error;
  let defaultState;

  beforeEach(() => {
    createTask = jest.fn();
    changeMode = jest.fn();
    isFetching = false;
    error = null;
    defaultState = {
      task: {
        description: '',
        title: '',
      },
    };
  });

  it('should render a TaskForm', () => {
    const wrapper = shallow(
      <CreateTask
        {...{
          createTask,
          changeMode,
          isFetching,
          error,
        }}
      />,
    );

    expect(wrapper.find(TaskForm).length).toBe(1);
  });

  it('should pass props to TaskForm', () => {
    const wrapper = shallow(
      <CreateTask
        {...{
          createTask,
          changeMode,
          isFetching,
          error,
        }}
      />,
    );

    expect(wrapper.find(TaskForm).first().props()).toHaveProperty('onTitleChange');
    expect(wrapper.find(TaskForm).first().props()).toHaveProperty('onDescriptionChange');
    expect(wrapper.find(TaskForm).first().props()).toHaveProperty('onSubmit');
    expect(wrapper.find(TaskForm).first().props()).toHaveProperty('onCancel');
    expect(wrapper.find(TaskForm).first().props()).toHaveProperty('task');
  });

  it('should render an ErrorMessage when error prop is present', () => {
    error = 'error';

    const wrapper = shallow(
      <CreateTask
        {...{
          createTask,
          changeMode,
          isFetching,
          error,
        }}
      />,
    );

    expect(wrapper.find(ErrorMessage).length).toBe(1);
  });

  it('should render an LoadingMessage when fetching', () => {
    isFetching = true;

    const wrapper = shallow(
      <CreateTask
        {...{
          createTask,
          changeMode,
          isFetching,
          error,
        }}
      />,
    );

    expect(wrapper.find(LoadingMessage).length).toBe(1);
  });

  describe('CreateTask.getErrorMessage', () => {
    it('should return a message', () => {
      const wrapper = shallow(
        <CreateTask
          {...{
            createTask,
            changeMode,
            isFetching,
            error,
          }}
        />,
      );

      expect(wrapper.instance().getErrorMessage('message')).toEqual(<div>message</div>);
    });
  });

  describe('CreateTask.getLoadingMessage', () => {
    it('should return a message', () => {
      const wrapper = shallow(
        <CreateTask
          {...{
            createTask,
            changeMode,
            isFetching,
            error,
          }}
        />,
      );

      expect(wrapper.instance().getLoadingMessage()).toEqual(<div>Creating Task</div>);
    });
  });

  describe('CreateTask.clearMode', () => {
    it('should call props.changeMode with null', () => {
      const wrapper = shallow(
        <CreateTask
          {...{
            createTask,
            changeMode,
            isFetching,
            error,
          }}
        />,
      );

      wrapper.instance().clearMode();

      expect(changeMode).toHaveBeenCalledWith(null);
    });

    it('should set the default state', () => {
      const task = {
        title: 'test',
        description: 'test description',
      };

      const wrapper = shallow(
        <CreateTask
          {...{
            createTask,
            changeMode,
            isFetching,
            error,
          }}
        />,
      );

      wrapper.instance().setState({ task });
      wrapper.instance().clearMode();

      expect(wrapper.instance().state).toEqual(defaultState);
    });
  });

  describe('CreateTask.updateTitle', () => {
    it('should update the title', () => {
      const updatedTitle = 'updated title';

      const wrapper = shallow(
        <CreateTask
          {...{
            createTask,
            changeMode,
            isFetching,
            error,
          }}
        />,
      );

      wrapper.instance().updateTitle(updatedTitle);

      expect(wrapper.instance().state.task.title).toBe(updatedTitle);
    });
  });

  describe('CreateTask.updateTitle', () => {
    it('should update the description', () => {
      const updatedDescription = 'updated description';

      const wrapper = shallow(
        <CreateTask
          {...{
            createTask,
            changeMode,
            isFetching,
            error,
          }}
        />,
      );

      wrapper.instance().updateDescription(updatedDescription);

      expect(wrapper.instance().state.task.description).toBe(updatedDescription);
    });
  });

  describe('CreateTask.submitTask', () => {
    it('should call props.createTask with task', () => {
      createTask = jest.fn(() => (Promise.resolve()));
      const task = {
        title: 'test',
        description: 'test description',
      };

      const wrapper = shallow(
        <CreateTask
          {...{
            createTask,
            changeMode,
            isFetching,
            error,
          }}
        />,
      );

      wrapper.instance().setState({ task });
      wrapper.instance().submitTask();

      expect(createTask).toHaveBeenCalledWith(task);
    });

    it('should set the default state when resolving the promise returned by createTask', () => {
      createTask = jest.fn(() => (Promise.resolve()));
      const task = {
        title: 'test',
        description: 'test description',
      };

      const wrapper = shallow(
        <CreateTask
          {...{
            createTask,
            changeMode,
            isFetching,
            error,
          }}
        />,
      );

      wrapper.instance().setState({ task });
      return wrapper.instance().submitTask().then(() => {
        expect(wrapper.instance().state).toEqual(defaultState);
      });
    });
  });
});
