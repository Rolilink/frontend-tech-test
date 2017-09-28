/*
 This case is called when a task is created it just adds one task wrapping it
 around an array
*/

import addTasks from './addTasks';
import { setSuccess } from '../http';

export default(state, action) => ({
  ...addTasks(
    state,
    { ...action, payload: { tasks: [action.payload.task] } }),
  isFetching: setSuccess(state).isFetching,
  error: setSuccess(state).error,
});
