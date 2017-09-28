import { getIsFetching, getError } from '../createTask';
import { httpFactory } from '../../../../../__tests__/testUtils/http';

const state = {
  tasks: {
    createTask: {
      ...httpFactory(
        {
          error: 'error',
          isFetching: true,
        },
      ),
    },
  },
};

describe('Tasks.Redux.Selectors.CreateTask.getIsFetching', () => {
  it('should get isFetching from createTask when receiving a state', () => {
    expect(getIsFetching(state)).toBe(true);
  });
});

describe('Tasks.Redux.Selectors.CreateTask.getError', () => {
  it('should get error from createTask when receiving a state', () => {
    expect(getError(state)).toBe('error');
  });
});
