import addTasks from '../../allTasks/addTasks';
import { actionFactory } from '../../../../../../../__tests__/testUtils/redux';
import { taskFactory } from '../../../../../../../__tests__/testUtils/tasks';
import { normalizeTasks } from '../../../../utils';

jest.mock('../../../../factories/');
const factoriesModule = require('../../../../factories/');

factoriesModule.allTasks.tasks.mockImplementation(state => state);

describe('Tasks.Redux.Reducers.Cases.allTasks.addTasks', () => {
  it('should add tasks to state when state is empty', () => {
    const state = {};
    const tasks = [taskFactory({ id: 1 }), taskFactory({ id: 2 })];
    const action = actionFactory({ payload: { tasks } });

    const newState = addTasks(state, action);

    expect(newState).toMatchSnapshot();
  });

  it('should add tasks withouth erasing existing tasks in the state when the state is not empty', () => {
    const state = {
      tasks: {
        ...normalizeTasks([taskFactory({ id: 1 }), taskFactory({ id: 2 })]),
      },
    };
    const tasks = [taskFactory({ id: 3 }), taskFactory({ id: 5 })];
    const action = actionFactory({ payload: { tasks } });

    const newState = addTasks(state, action);

    expect(newState).toMatchSnapshot();
  });

  it('should update existing tasks in the state when new tasks id matches existing one', () => {
    const state = {
      tasks: {
        ...normalizeTasks([taskFactory({ id: 1 }), taskFactory({ id: 2 })]),
      },
    };
    const tasks = [taskFactory({ id: 2, title: 'updated' })];
    const action = actionFactory({ payload: { tasks } });

    const newState = addTasks(state, action);

    expect(newState).toMatchSnapshot();
  });
});
