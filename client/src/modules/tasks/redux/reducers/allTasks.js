import { handleActions } from 'redux-actions';
import successCase from './cases/allTasks/fetchTasksSuccess';
import createTaskSuccess from './cases/allTasks/createTaskSuccess';
import {
  setLoading as loadingCase,
  setError as errorCase,
} from './cases/http';
import { allTasks } from '../factories';

import {
  FETCH_TASKS_LOADING,
  FETCH_TASKS_SUCCESS,
  FETCH_TASKS_ERROR,
  CREATE_TASK_SUCCESS,
} from '../actionTypes';

const stateFactory = allTasks.state;

const reducer = handleActions({
  [CREATE_TASK_SUCCESS]: createTaskSuccess,
  [FETCH_TASKS_SUCCESS]: successCase,
  [FETCH_TASKS_LOADING]: loadingCase,
  [FETCH_TASKS_ERROR]: errorCase,
}, stateFactory());

export default reducer;
