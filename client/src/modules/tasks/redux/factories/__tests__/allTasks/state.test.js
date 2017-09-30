import stateFactory from '../../allTasks/state';

import {
  httpFactory,
} from '../../../../../../__tests__/testUtils/http';

// Mock dependencies
jest.mock('../../allTasks/tasks');
jest.mock('../../http');

const tasksFactoryModule = require('../../allTasks/tasks');
const httpFactoryModule = require('../../http');

tasksFactoryModule.default.mockImplementation(() => ({ tasks: {} }));
httpFactoryModule.default.mockImplementation(() => httpFactory());

describe('Tasks.Redux.Factories.AllTasks.state', () => {
  const defaultState = { tasks: {}, ...httpFactory() };
  const newState = stateFactory();

  it('should return default state', () => {
    expect(newState).toEqual(defaultState);
  });
});
