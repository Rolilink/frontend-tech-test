import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import connectToState from '../CreateTask';

jest.mock('../../../redux/', () => ({
  fetchTasks: jest.fn(),
  selectors: {
    getShowTasksProps: () => ({
      tasks: [],
      isFetching: true,
      error: 'error',
    }),
  },
}));

class Component extends React.Component {
  render() {
    return (<div> adsasdas </div>);
  }
}

describe('Tasks.List.Providers.CreateTask', () => {
  let instanceProps;
  let wrapper;

  beforeAll(() => {
    const mockStore = configureStore();
    const store = mockStore({});
    const ConnectedComponent = connectToState(Component);

    wrapper = shallow(<ConnectedComponent store={store} />);
    instanceProps = wrapper.props();
  });

  it('should connect component to state', () => {
    expect(instanceProps).toHaveProperty('isFetching', true);
    expect(instanceProps).toHaveProperty('error', 'error');
  });

  it('should pass createTask as prop', () => {
    expect(instanceProps).toHaveProperty('createTask');
  });
});
