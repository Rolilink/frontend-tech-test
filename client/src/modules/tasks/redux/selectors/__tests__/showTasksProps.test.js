import { taskFactory } from '../../../../../__tests__/testUtils/tasks';
import { httpFactory } from '../../../../../__tests__/testUtils/http';
import { normalizeTasks } from '../../utils';
import getShowTasksProps from '../showTasksProps';

const state = {
  tasks: {
    allTasks: {
      tasks: {
        ...normalizeTasks([
          taskFactory({ id: 1 }),
          taskFactory({ id: 2 }),
          taskFactory({ id: 3 }),
        ]),
      },
      ...httpFactory(
        {
          error: 'error',
          isFetching: true,
        },
      ),
    },
  },
};


describe('Tasks.Redux.Selectors.getShowTasksProps', () => {
  it('should get isFetching from allTasks when receiving a state', () => {
    expect(getShowTasksProps(state).isFetching).toBe(true);
  });

  it('should get error from allTasks when receiving a state', () => {
    expect(getShowTasksProps(state).error).toBe('error');
  });

  it('should get visible tasks from allTasks when receiving a state', () => {
    expect(getShowTasksProps(state).tasks).toMatchSnapshot();
  });
});
