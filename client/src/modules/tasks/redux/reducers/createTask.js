import { handleActions } from 'redux-actions';
import {
  setLoading as loadingCase,
  setError as errorCase,
  setSuccess as successCase,
} from './cases/http';
import { http as httpFactory } from '../factories';

import {
  CREATE_TASK_LOADING,
  CREATE_TASK_SUCCESS,
  CREATE_TASK_ERROR,
} from '../actionTypes';

const reducer = handleActions({
  [CREATE_TASK_SUCCESS]: successCase,
  [CREATE_TASK_LOADING]: loadingCase,
  [CREATE_TASK_ERROR]: errorCase,
}, httpFactory());

export default reducer;
