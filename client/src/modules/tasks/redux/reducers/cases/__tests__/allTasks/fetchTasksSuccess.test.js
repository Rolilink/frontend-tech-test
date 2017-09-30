import { actionFactory } from '../../../../../../../__tests__/testUtils/redux';
import { httpFactory } from '../../../../../../../__tests__/testUtils/http';
import { taskFactory } from '../../../../../../../__tests__/testUtils/tasks';
import { normalizeTask } from '../../../../utils';
import fetchTasksSuccess from '../../allTasks/fetchTasksSuccess';

const defaultState = { tasks: {}, ...httpFactory() };

describe('Tasks.Redux.Reducers.Cases.allTasks.fetchTasksSuccess', () => {
  let newState;
  let tasks;

  beforeAll(() => {
    tasks = [
      taskFactory({ id: 1 }),
      taskFactory({ id: 2 }),
    ];

    newState = fetchTasksSuccess(
      defaultState,
      actionFactory({ payload: { tasks } }),
    );
  });


  it('should add the fetched tasks to the state when called with a payload', () => {
    const expectedTasks = {
      ...normalizeTask(taskFactory({ id: 1 })),
      ...normalizeTask(taskFactory({ id: 2 })),
    };

    expect(newState.tasks).toEqual(expectedTasks);
  });

  it('should return the state with isFetching equal to false', () => {
    expect(newState.isFetching).toBe(false);
  });

  it('should return the state with is error equal null', () => {
    expect(newState.error).toBe(null);
  });
});
