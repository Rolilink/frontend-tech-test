import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import connectToState from '../CreateTask';

jest.mock('../../../redux/');

const dataModule = require('../../../redux/');


dataModule.selectors.getCreateTaskProps.mockImplementation(() => ({
  isFetching: true,
  error: 'error',
}));

class Component extends React.Component {
  render() {
    return (<div> adsasdas </div>);
  }
}

describe('Tasks.Create.Providers.CreateTask', () => {
  let instanceProps;
  let wrapper;

  beforeAll(() => {
    const mockStore = configureStore();
    const store = mockStore({});
    const ConnectedComponent = connectToState(Component);

    wrapper = shallow(<ConnectedComponent store={store} />);
    instanceProps = wrapper.props();
  });

  it('should pass isFetching as prop', () => {
    expect(instanceProps).toHaveProperty('isFetching', true);
  });

  it('should pass error as prop', () => {
    expect(instanceProps).toHaveProperty('error', 'error');
  });

  it('should pass createTask as prop', () => {
    expect(instanceProps).toHaveProperty('createTask');
  });
});
