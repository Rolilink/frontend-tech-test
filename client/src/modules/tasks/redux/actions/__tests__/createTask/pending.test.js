import configureStore from 'redux-mock-store';
import PromiseMiddleware from 'redux-promise-middleware';
import { createTask } from '../../';
import { CREATE_TASK_LOADING } from '../../../actionTypes';
import { actionFactory } from '../../../../../../__tests__/testUtils/redux';

const middlewares = [new PromiseMiddleware()];
const mockStore = configureStore(middlewares);

jest.mock(
  '../../../../../../services/Tasks',
  () => (
    class Tasks {
      createTask() {
        return new Promise(() => {});
      }
    }
  ),
);

describe('Tasks.Redux.Actions.CreateTask', () => {
  it('should dispatch a CREATE_TASK_LOADING action', () => {
    const initialState = {};
    const store = mockStore(initialState);

    store.dispatch(createTask());


    expect(store.getActions()).toEqual([actionFactory({ type: CREATE_TASK_LOADING })]);
  });
});
