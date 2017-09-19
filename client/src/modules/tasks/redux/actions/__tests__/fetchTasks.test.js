import configureStore from 'redux-mock-store';
import PromiseMiddleware from 'redux-promise-middleware';
import { fetchTasks } from '../../';
import { FETCH_TASKS_ERROR, FETCH_TASKS_LOADING, FETCH_TASKS_SUCCESS } from '../../actionTypes';
import { actionFactory } from '../../../../../__tests__/testUtils/redux';

const middlewares = [new PromiseMiddleware()];
const mockStore = configureStore(middlewares);

jest.mock('../../../../../services/Tasks');

const TasksModule = require('../../../../../services/Tasks');

describe('Tasks.Redux.Actions.FetchTasks', () => {
  it('should dispatch a FETCH_TASKS_LOADING action', () => {
    const initialState = {};
    const store = mockStore(initialState);

    TasksModule.__setFetchTasksPromiseFn(() => {});

    store.dispatch(fetchTasks());


    expect(store.getActions()).toEqual([actionFactory({ type: FETCH_TASKS_LOADING })]);
  });

  it('should dispatch a FETCH_TASKS_ERROR action', () => {
    const initialState = {};
    const store = mockStore(initialState);

    TasksModule.__setFetchTasksPromiseFn((resolve, reject) => reject('error'));

    return store.dispatch(fetchTasks()).catch(() => {
      expect(store.getActions())
        .toContainEqual(actionFactory({ type: FETCH_TASKS_ERROR, error: true, payload: 'error' }));
    });
  });

  it('should dispatch a FETCH_TASKS_SUCCESS action', () => {
    const initialState = {};
    const store = mockStore(initialState);

    TasksModule.__setFetchTasksPromiseFn(resolve => resolve('success'));

    return store.dispatch(fetchTasks()).then(() => {
      expect(store.getActions())
        .toContainEqual(actionFactory({ type: FETCH_TASKS_SUCCESS, payload: 'success' }));
    });
  });
});
