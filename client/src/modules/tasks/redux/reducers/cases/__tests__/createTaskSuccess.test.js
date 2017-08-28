import { actionFactory } from '../../../../../../__tests__/testUtils/redux';
import { httpFactory } from '../../../../../../__tests__/testUtils/http';
import { taskFactory } from '../../../../../../__tests__/testUtils/tasks';
import { normalizeTask } from '../../../utils';
import createTaskSuccess from '../allTasks/createTaskSuccess';

jest.mock('../http', () => ({
  setSuccess: () => {
    return { isFetching: true, error: 'error' };
  },
}));

jest.mock('../allTasks/addTasks', () => (
  (state, { payload }) => {
    const task = payload.tasks[0];

    return {
      tasks: {
        [task.id]: { id: task.id, title: task.title, description: task.description },
      },
    };
  }
));

const defaultState = { tasks: {}, ...httpFactory() };

describe('Tasks.Redux.Reducers.Cases.allTasks.CreateTaskSuccess', () => {
  let result;

  beforeAll(() => {
    result = createTaskSuccess(
      defaultState,
      actionFactory({ payload: { task: taskFactory({ id: 1 }) } }),
    );
  });


  it('should resolve tasks update calling addTasks', () => {
    expect(result.tasks).toEqual({ ...normalizeTask(taskFactory({ id: 1 })) });
  });

  it('should resolve http update calling http.setSuccess', () => {
    expect(result.isFetching).toBe(true);
    expect(result.error).toBe('error');
  });
});
