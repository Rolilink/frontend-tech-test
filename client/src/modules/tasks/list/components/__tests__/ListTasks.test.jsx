import React from 'react';
import { shallow, mount } from 'enzyme';
import serializer from 'enzyme-to-json/serializer';

import ShowTasks from '../ListTasks';
import { taskFactory } from '../../../../../__tests__/testUtils/tasks';

expect.addSnapshotSerializer(serializer);

const tasks = [
  taskFactory({
    id: 1,
    title: 'Task Title',
    description: 'Task Description',
  }),
];

describe('Tasks.List.ListTasks', () => {
  it('should call fetchTasks prop when mounting', () => {
    const fetchTasks = jest.fn();

    shallow(<ShowTasks fetchTasks={fetchTasks} />);

    expect(fetchTasks.mock.calls.length).toBe(1);
  });

  it('should render tasks when a tasks object array is passed through the tasks prop', () => {
    const fetchTasks = jest.fn();

    const showTasks = mount(<ShowTasks fetchTasks={fetchTasks} tasks={tasks} />);

    expect(showTasks).toMatchSnapshot();
  });

  it('should render an error message when an error message is passed through error prop', () => {
    const fetchTasks = jest.fn();

    const showTasks = mount(<ShowTasks fetchTasks={fetchTasks} error="error" />);

    expect(showTasks).toMatchSnapshot();
  });

  it('should render a loading message when the isFetching prop is present', () => {
    const fetchTasks = jest.fn();

    const showTasks = mount(<ShowTasks fetchTasks={fetchTasks} isFetching />);

    expect(showTasks).toMatchSnapshot();
  });

  it('should render an "there is no tasks" message when tasks prop is empty and isFetching prop is not present', () => {
    const fetchTasks = jest.fn();

    const showTasks = mount(<ShowTasks fetchTasks={fetchTasks} />);

    expect(showTasks).toMatchSnapshot();
  });

  it('#getErrorMessage should return a error message', () => {
    const fetchTasks = jest.fn();

    const showTasks = shallow(<ShowTasks fetchTasks={fetchTasks} />);

    expect(showTasks.instance().getErrorMessage('message')).toMatchSnapshot();
  });

  it('#getLoadingMessage should return a loading message', () => {
    const fetchTasks = jest.fn();

    const showTasks = shallow(<ShowTasks fetchTasks={fetchTasks} />);

    expect(showTasks.instance().getLoadingMessage()).toMatchSnapshot();
  });

  it('#getEmptyMessage should return a message', () => {
    const fetchTasks = jest.fn();

    const showTasks = shallow(<ShowTasks fetchTasks={fetchTasks} />);

    expect(showTasks.instance().getEmptyMessage()).toMatchSnapshot();
  });
});
