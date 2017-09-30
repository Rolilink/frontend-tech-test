import configureStore from 'redux-mock-store';
import PromiseMiddleware from 'redux-promise-middleware';
import { createTask } from '../';
import { CREATE_TASK_ERROR, CREATE_TASK_SUCCESS, CREATE_TASK_LOADING } from '../../actionTypes';
import { actionFactory } from '../../../../../__tests__/testUtils/redux';

const middlewares = [new PromiseMiddleware()];
const mockStore = configureStore(middlewares);

jest.mock('../../../../../services/Tasks');

const TasksModule = require('../../../../../services/Tasks');

describe('Tasks.Redux.Actions.CreateTask', () => {
  it('should dispatch a CREATE_TASK_LOADING action', () => {
    const initialState = {};
    const store = mockStore(initialState);

    TasksModule.__setCreateTaskPromiseFn(() => {});

    store.dispatch(createTask());


    expect(store.getActions()).toEqual([actionFactory({ type: CREATE_TASK_LOADING })]);
  });

  it('should dispatch a CREATE_TASK_ERROR action', () => {
    const initialState = {};
    const store = mockStore(initialState);

    TasksModule.__setCreateTaskPromiseFn((resolve, reject) => reject('error'));

    return store.dispatch(createTask()).catch(() => {
      expect(store.getActions())
        .toContainEqual(actionFactory({ type: CREATE_TASK_ERROR, error: true, payload: 'error' }));
    });
  });

  it('should dispatch a CREATE_TASK_SUCCESS action', () => {
    const initialState = {};
    const store = mockStore(initialState);

    TasksModule.__setCreateTaskPromiseFn(resolve => resolve('success'));

    return store.dispatch(createTask()).then(() => {
      expect(store.getActions())
        .toContainEqual(actionFactory({ type: CREATE_TASK_SUCCESS, payload: 'success' }));
    });
  });
});
