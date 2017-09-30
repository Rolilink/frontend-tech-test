import React from 'react';
import { mount } from 'enzyme';
import serializer from 'enzyme-to-json/serializer';

import { taskFactory } from '../../../__tests__/testUtils/tasks';
import TaskForm from '../TaskForm';

expect.addSnapshotSerializer(serializer);

describe('Common.TaskForm', () => {
  it('should render', () => {
    const task = taskFactory({ id: 1 });
    const wrapper = mount(<TaskForm task={task} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should have title input with value equals task.title when task is passed as props', () => {
    const task = taskFactory({ id: 1 });
    const wrapper = mount(<TaskForm task={task} />);

    expect(wrapper.find('.TasksForm-TitleInput')).toMatchSnapshot();
  });

  it('should have description input with value equals task.description when task is passed as props', () => {
    const task = taskFactory();
    const wrapper = mount(<TaskForm task={task} />);

    expect(wrapper.find('.TasksForm-DescriptionInput')).toMatchSnapshot();
  });

  it('should call onTitleChange to update title', () => {
    const event = { target: { name: 'title', value: 'updated title' } };
    const onTitleChange = jest.fn();
    const wrapper = mount(<TaskForm onTitleChange={onTitleChange} />);

    wrapper.find('.TasksForm-TitleInput').simulate('change', event);

    expect(onTitleChange).toBeCalledWith(event.target.value);
  });

  it('should call onDescriptionChange to update description', () => {
    const event = { target: { name: 'description', value: 'updated description' } };
    const onDescriptionChange = jest.fn();
    const wrapper = mount(<TaskForm onDescriptionChange={onDescriptionChange} />);

    wrapper.find('.TasksForm-DescriptionInput').simulate('change', event);

    expect(onDescriptionChange).toBeCalledWith(event.target.value);
  });

  it('should call onSubmit when submiting form', () => {
    const preventDefault = jest.fn();
    const event = { preventDefault };
    const onSubmit = jest.fn();
    const wrapper = mount(<TaskForm onSubmit={onSubmit} />);

    wrapper.find('.TasksForm').simulate('submit', event);

    expect(onSubmit).toBeCalled();
    expect(preventDefault).toBeCalled();
  });

  it('should call onCancel when clicking cancel button', () => {
    const onCancel = jest.fn();
    const wrapper = mount(<TaskForm onCancel={onCancel} />);

    wrapper.find('.TasksForm-CancelButton').simulate('click');

    expect(onCancel).toBeCalled();
  });

  it('should have a disabled submit button when task is not passed', () => {
    const wrapper = mount(<TaskForm />);

    expect(wrapper.find('.TasksForm-SubmitButton')).toMatchSnapshot();
  });

  it('should have a disabled submit button when task is on default state', () => {
    const task = { description: '', title: '' };
    const wrapper = mount(<TaskForm task={task} />);

    expect(wrapper.find('.TasksForm-SubmitButton')).toMatchSnapshot();
  });

  it('should have a enabled submit button when task is not on default state', () => {
    const task = { description: 'description', title: 'title' };
    const wrapper = mount(<TaskForm task={task} />);

    expect(wrapper.find('.TasksForm-SubmitButton')).toMatchSnapshot();
  });
});
