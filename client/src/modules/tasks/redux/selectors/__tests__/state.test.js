import getState from '../state';
import { allTasks as allTasksFactories, http as httpFactory } from '../../factories';

const state = {
  tasks: {
    allTasks: allTasksFactories.state(),
    createTask: httpFactory(),
  },
};

describe('Tasks.Redux.Selectors.getState', () => {
  it('should get tasks state from store state', () => {
    expect(getState(state)).toMatchSnapshot();
  });
});
