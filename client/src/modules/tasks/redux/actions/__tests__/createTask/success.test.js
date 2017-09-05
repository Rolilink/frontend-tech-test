import configureStore from 'redux-mock-store';
import PromiseMiddleware from 'redux-promise-middleware';
import { createTask } from '../../';
import { CREATE_TASK_SUCCESS } from '../../../actionTypes';
import { actionFactory } from '../../../../../../__tests__/testUtils/redux';

const middlewares = [new PromiseMiddleware()];
const mockStore = configureStore(middlewares);

jest.mock(
  '../../../../../../services/Tasks',
  () => (
    class Tasks {
      createTask() {
        return new Promise((resolve) => { resolve('success'); });
      }
    }
  ),
);

describe('Tasks.Redux.Actions.CreateTask', () => {
  it('should dispatch a CREATE_TASK_SUCCESS action', () => {
    const initialState = {};
    const store = mockStore(initialState);

    return store.dispatch(createTask()).then(() => {
      expect(store.getActions())
        .toContainEqual(actionFactory({ type: CREATE_TASK_SUCCESS, payload: 'success' }));
    });
  });
});
