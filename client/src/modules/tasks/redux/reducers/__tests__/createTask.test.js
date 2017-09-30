import reducer from '../createTask';
import { actionFactory } from '../../../../../__tests__/testUtils/redux';

import {
  CREATE_TASK_LOADING,
  CREATE_TASK_SUCCESS,
  CREATE_TASK_ERROR,
} from '../../actionTypes';

// Mock http cases
jest.mock('../cases/http');
const httpCasesModule = require('../cases/http');


describe('Tasks.Redux.Reducers.CreateTask', () => {
  const state = {};

  afterEach(() => {
    httpCasesModule.setLoading.mockClear();
    httpCasesModule.setError.mockClear();
    httpCasesModule.setSuccess.mockClear();
  });

  it('should call setLoading case when dispatching an CREATE_TASK_LOADING action', () => {
    const action = actionFactory({ type: CREATE_TASK_LOADING });

    reducer(state, action);

    expect(httpCasesModule.setLoading).toHaveBeenCalledWith(state, action);
  });

  it('should call setError case when dispatching an CREATE_TASK_ERROR action', () => {
    const action = actionFactory({ type: CREATE_TASK_ERROR });

    reducer(state, action);

    expect(httpCasesModule.setError).toHaveBeenCalledWith(state, action);
  });

  it('should call fetchTasksSuccess case when dispatching an CREATE_TASK_SUCCESS action', () => {
    const action = actionFactory({ type: CREATE_TASK_SUCCESS });

    reducer(state, action);

    expect(httpCasesModule.setSuccess).toHaveBeenCalledWith(state, action);
  });
});
