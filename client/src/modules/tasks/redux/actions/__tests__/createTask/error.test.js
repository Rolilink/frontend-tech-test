import configureStore from 'redux-mock-store';
import PromiseMiddleware from 'redux-promise-middleware';
import { createTask } from '../../';
import { CREATE_TASK_ERROR } from '../../../actionTypes';
import { actionFactory } from '../../../../../../__tests__/testUtils/redux';

const middlewares = [new PromiseMiddleware()];
const mockStore = configureStore(middlewares);

jest.mock(
  '../../../../../../services/Tasks',
  () => (
    class Tasks {
      createTask() {
        return new Promise((resolve, reject) => { reject('error'); });
      }
    }
  ),
);

describe('Tasks.Redux.Actions.CreateTask', () => {
  it('should dispatch a CREATE_TASK_ERROR action', () => {
    const initialState = {};
    const store = mockStore(initialState);

    return store.dispatch(createTask()).catch(() => {
      expect(store.getActions())
        .toContainEqual(actionFactory({ type: CREATE_TASK_ERROR, error: true, payload: 'error' }));
    });
  });
});
