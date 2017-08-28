import addTasks from './addTasks';
import { setSuccess } from '../http';

export default(state, action) => ({
  ...addTasks(
    state,
    { ...action, payload: { tasks: [action.payload.task] } }),
  isFetching: setSuccess(state, action).isFetching,
  error: setSuccess(state, action).error,
});
