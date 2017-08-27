import React from 'react';
import { shallow } from 'enzyme';

import CreateTask from '../CreateTask';
import TaskForm from '../../../../common/TaskForm';
import ErrorMessage from '../../../../common/ErrorMessage';
import LoadingMessage from '../../../../common/LoadingMessage';


describe('Tasks.Create.CreateTask', () => {
  it('should render a TaskForm', () => {
    const createTask = jest.fn();
    const changeMode = jest.fn();
    const isFetching = false;
    const error = null;

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
    const createTask = jest.fn();
    const changeMode = jest.fn();
    const isFetching = false;
    const error = null;

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

    expect(wrapper.find(TaskForm).first().props()).toHaveProperty('onTitleUpdate');
    expect(wrapper.find(TaskForm).first().props()).toHaveProperty('onDescriptionUpdate');
    expect(wrapper.find(TaskForm).first().props()).toHaveProperty('onSubmit');
    expect(wrapper.find(TaskForm).first().props()).toHaveProperty('onCancel');
    expect(wrapper.find(TaskForm).first().props()).toHaveProperty('task');
  });

  it('should render an ErrorMessage when error prop is present', () => {
    const createTask = jest.fn();
    const changeMode = jest.fn();
    const isFetching = false;
    const error = 'error';

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
    const createTask = jest.fn();
    const changeMode = jest.fn();
    const isFetching = true;
    const error = null;

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

  describe('TaskForm.getErrorMessage', () => {
    it('should return a message', () => {
      const createTask = jest.fn();
      const changeMode = jest.fn();
      const isFetching = false;
      const error = null;

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

  describe('TaskForm.getLoadingMessage', () => {
    it('should return a message', () => {
      const createTask = jest.fn();
      const changeMode = jest.fn();
      const isFetching = false;
      const error = null;

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
});
