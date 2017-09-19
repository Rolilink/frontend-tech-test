import reducer from '../allTasks';
import { actionFactory } from '../../../../../__tests__/testUtils/redux';

import {
  FETCH_TASKS_LOADING,
  FETCH_TASKS_SUCCESS,
  FETCH_TASKS_ERROR,
  CREATE_TASK_SUCCESS,
} from '../../actionTypes';

// Mock http cases
jest.mock('../cases/http');
const httpCasesModule = require('../cases/http');

// Mock fetchTasksSuccess
jest.mock('../cases/allTasks/fetchTasksSuccess');
const fetchTasksSuccessModule = require('../cases/allTasks/fetchTasksSuccess');

// Mock createTaskSuccess
jest.mock('../cases/allTasks/createTaskSuccess');
const createTaskSuccessModule = require('../cases/allTasks/createTaskSuccess');

describe('Tasks.Redux.Reducers.AllTasks', () => {
  const state = {};

  afterEach(() => {
    httpCasesModule.setLoading.mockClear();
    httpCasesModule.setError.mockClear();
  });

  it('should call setLoading case when dispatching an FETCH_TASKS_LOADING action', () => {
    const action = actionFactory({ type: FETCH_TASKS_LOADING });

    reducer(state, action);

    expect(httpCasesModule.setLoading).toHaveBeenCalledWith(state, action);
  });

  it('should call setError case when dispatching an FETCH_TASKS_ERROR action', () => {
    const action = actionFactory({ type: FETCH_TASKS_ERROR });

    reducer(state, action);

    expect(httpCasesModule.setError).toHaveBeenCalledWith(state, action);
  });

  it('should call fetchTasksSuccess case when dispatching an FETCH_TASKS_SUCCESS action', () => {
    const action = actionFactory({ type: FETCH_TASKS_SUCCESS });

    reducer(state, action);

    expect(fetchTasksSuccessModule.default).toHaveBeenCalledWith(state, action);
  });

  it('should call createTaskSuccess case when dispatching an CREATE_TASK_SUCCESS action', () => {
    const action = actionFactory({ type: CREATE_TASK_SUCCESS });

    reducer(state, action);

    expect(createTaskSuccessModule.default).toHaveBeenCalledWith(state, action);
  });
});
