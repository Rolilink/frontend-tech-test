import { actionFactory } from '../../../../../../../__tests__/testUtils/redux';
import { httpFactory } from '../../../../../../../__tests__/testUtils/http';
import { taskFactory } from '../../../../../../../__tests__/testUtils/tasks';
import createTaskSuccess from '../../allTasks/createTaskSuccess';


const currentState = { tasks: {}, ...httpFactory({ isFetching: true, error: 'error' }) };

describe('Tasks.Redux.Reducers.Cases.allTasks.CreateTaskSuccess', () => {
  let newState;

  beforeAll(() => {
    const action = actionFactory(actionFactory({ payload: { task: taskFactory({ id: 1 }) } }));
    newState = createTaskSuccess(currentState, action);
  });

  it('should add the created task to the state when called with a payload', () => {
    expect(newState.tasks[1]).toEqual(taskFactory({ id: 1 }));
  });

  it('should return the state with isFetching equal to false', () => {
    expect(newState.isFetching).toBe(false);
  });

  it('should return the state with is error equal null', () => {
    expect(newState.error).toBe(null);
  });
});
