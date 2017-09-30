import React from 'react';
import { shallow, mount } from 'enzyme';
import serializer from 'enzyme-to-json/serializer';

import CreateTask from '../CreateTask';

expect.addSnapshotSerializer(serializer);

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

  it('should render a form', () => {
    const wrapper = mount(
      <CreateTask
        {...{
          createTask,
          changeMode,
        }}
      />,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should render an error message when error prop is present', () => {
    error = 'error';

    const wrapper = mount(
      <CreateTask
        {...{
          createTask,
          changeMode,
          isFetching,
          error,
        }}
      />,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should render an LoadingMessage when isFetching prop is present', () => {
    isFetching = true;

    const wrapper = mount(
      <CreateTask
        {...{
          createTask,
          changeMode,
          isFetching,
          error,
        }}
      />,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should return an error message when calling #getErrorMessage', () => {
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

    expect(wrapper.instance().getErrorMessage('message')).toMatchSnapshot();
  });

  it('should return a loading message when calling #getLoadingMessage', () => {
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

    expect(wrapper.instance().getLoadingMessage()).toMatchSnapshot();
  });

  it('should call props.changeMode with null when calling #clearMode', () => {
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

  it('should set the state to its default when calling #clearMode', () => {
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

  it('should update the title when calling #updateTitle', () => {
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

  it('should update the description state when calling #updatedDescription', () => {
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

  it('should call props.createTask with task when calling #submitTask', () => {
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

  it('should set the default state wwhen calling #submitTask', () => {
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
