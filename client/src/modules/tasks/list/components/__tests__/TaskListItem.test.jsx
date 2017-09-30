import React from 'react';
import { shallow } from 'enzyme';
import serializer from 'enzyme-to-json/serializer';

import TaskListItem from '../TaskListItem';
import { taskFactory } from '../../../../../__tests__/testUtils/tasks';

expect.addSnapshotSerializer(serializer);

const task = taskFactory({
  id: 1,
  title: 'Task Title',
  description: 'Task Description',
});

describe('Tasks.List.TaskListItem', () => {
  it('should render', () => (
    expect(shallow(<TaskListItem task={task} />)).toMatchSnapshot()
  ));
});
