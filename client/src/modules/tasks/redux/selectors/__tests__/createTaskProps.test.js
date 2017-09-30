import getCreateTaskProps from '../createTaskProps';
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


describe('Tasks.Redux.Selectors.getCreateTaskProps', () => {
  it('should get isFetching from createTask when receiving a state', () => {
    expect(getCreateTaskProps(state).isFetching).toBe(true);
  });

  it('should get error from createTask when receiving a state', () => {
    expect(getCreateTaskProps(state).error).toBe('error');
  });
});
