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
    TasksModule.__setCreateTaskPromiseFn(() => {});

    const initialState = {};
    const store = mockStore(initialState);

    store.dispatch(createTask());


    expect(store.getActions()).toEqual([actionFactory({ type: CREATE_TASK_LOADING })]);
  });

  it('should dispatch a CREATE_TASK_ERROR action', () => {
    TasksModule.__setCreateTaskPromiseFn((resolve, reject) => reject('error'));

    const initialState = {};
    const store = mockStore(initialState);

    console.log(createTask());

    return store.dispatch(createTask()).catch(() => {
      expect(store.getActions())
        .toContainEqual(actionFactory({ type: CREATE_TASK_ERROR, error: true, payload: 'error' }));
    });
  });

  it('should dispatch a CREATE_TASK_SUCCESS action', () => {
    TasksModule.__setCreateTaskPromiseFn(resolve => resolve('success'));

    const initialState = {};
    const store = mockStore(initialState);

    return store.dispatch(createTask()).then(() => {
      expect(store.getActions())
        .toContainEqual(actionFactory({ type: CREATE_TASK_SUCCESS, payload: 'success' }));
    });
  });
});
