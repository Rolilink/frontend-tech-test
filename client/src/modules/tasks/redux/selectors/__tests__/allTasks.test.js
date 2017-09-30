import { taskFactory } from '../../../../../__tests__/testUtils/tasks';
import { httpFactory } from '../../../../../__tests__/testUtils/http';
import { normalizeTasks } from '../../utils';
import { getTasks, getIsFetching, getError } from '../allTasks';

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

describe('Tasks.Redux.Selectors.AllTasks.getTasks', () => {
  it('should get all tasks when receiving a state', () => {
    expect(getTasks(state)).toMatchSnapshot();
  });
});

describe('Tasks.Redux.Selectors.AllTasks.getIsFetching', () => {
  it('should get isFetching from AllTasks when receiving a state', () => {
    expect(getIsFetching(state)).toBe(true);
  });
});

describe('Tasks.Redux.Selectors.AllTasks.getError', () => {
  it('should get the error from allTasks when receiving a state', () => {
    expect(getError(state)).toBe('error');
  });
});
