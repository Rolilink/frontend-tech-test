import React from 'react';
import { shallow, mount } from 'enzyme';
import serializer from 'enzyme-to-json/serializer';

import TasksList from '../TasksList';
import TaskListItem from '../TaskListItem';
import { taskFactory } from '../../../../../__tests__/testUtils/tasks';

expect.addSnapshotSerializer(serializer);

const tasks = [
  taskFactory({
    id: 1,
    title: 'Task Title',
    description: 'Task Description',
  }),
];

const tasksList = shallow(<TasksList tasks={tasks} />);
const getTaskListItem = tasksList.instance().getTaskListItem;

describe('Tasks.List.TasksList', () => {
  it('should render tasks', () => (
    expect(mount(<TasksList tasks={tasks} />)).toMatchSnapshot()
  ));

  it('#getTaskListItem should render an item', () => (
    expect(getTaskListItem(tasks[0])).toMatchSnapshot()
  ));

  it('#getTaskListItem should render an TaskListItem', () => (
    expect(getTaskListItem(tasks[0]).type).toEqual(TaskListItem)
  ));
});
