import reducer from '../createTask';
import { actionFactory } from '../../../../../__tests__/testUtils/redux';

import {
  CREATE_TASK_LOADING,
  CREATE_TASK_SUCCESS,
  CREATE_TASK_ERROR,
} from '../../actionTypes';

// Mock http cases
jest.mock('../cases/http', () => ({
  setLoading: jest.fn(() => ({
    error: null,
    isFetching: 'mocked',
  })),
  setError: jest.fn(() => ({
    error: 'mocked',
    isFetching: false,
  })),
  setSuccess: jest.fn(() => ({
    error: null,
    isFetching: false,
  })),
}));


describe('Tasks.Redux.Reducers.CreateTask', () => {
  it('should call setLoading case when dispatching an CREATE_TASK_LOADING action', () => {
    const newState = reducer(undefined, actionFactory({ type: CREATE_TASK_LOADING }));

    expect(newState).toEqual({ isFetching: 'mocked', error: null });
  });

  it('should call setError case when dispatching an CREATE_TASK_ERROR action', () => {
    const newState = reducer(undefined, actionFactory({ type: CREATE_TASK_ERROR }));

    expect(newState).toEqual({ error: 'mocked', isFetching: false });
  });

  it('should call fetchTasksSuccess case when dispatching an CREATE_TASK_SUCCESS action', () => {
    const newState = reducer(undefined, actionFactory({ type: CREATE_TASK_SUCCESS }));

    expect(newState).toEqual({ error: null, isFetching: false });
  });
});
