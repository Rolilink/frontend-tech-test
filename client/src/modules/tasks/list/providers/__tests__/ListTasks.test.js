import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import connectToState from '../ListTasks';
import { taskFactory } from '../../../../../__tests__/testUtils/tasks';

jest.mock('../../../redux/');

const dataModule = require('../../../redux/');

const tasks = [
  taskFactory({ id: 1 }),
  taskFactory({ id: 2 }),
];

dataModule.selectors.getShowTasksProps.mockImplementation(() => ({
  tasks,
  isFetching: true,
  error: 'error',
}));


class Component extends React.Component {
  render() {
    return (<div> adsasdas </div>);
  }
}

describe('Tasks.List.Providers.ListTasks', () => {
  let instanceProps;
  let wrapper;

  beforeAll(() => {
    const mockStore = configureStore();
    const store = mockStore({});
    const ConnectedComponent = connectToState(Component);

    wrapper = shallow(<ConnectedComponent store={store} />);
    instanceProps = wrapper.props();
  });

  it('should pass tasks prop to component', () => {
    expect(instanceProps).toHaveProperty('tasks', tasks);
  });

  it('should pass isFetching prop to component', () => {
    expect(instanceProps).toHaveProperty('isFetching', true);
  });

  it('should pass error prop to component', () => {
    expect(instanceProps).toHaveProperty('error', 'error');
  });

  it('should pass fetchTasks as prop', () => {
    expect(instanceProps).toHaveProperty('fetchTasks');
  });
});
