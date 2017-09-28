/*
 This case is called when multiple task are fetched 
*/

import addTasks from './addTasks';
import { setSuccess } from '../http';

export default(state, action) => ({
  ...addTasks(state, action),
  isFetching: setSuccess(state).isFetching,
  error: setSuccess(state).error,
});
