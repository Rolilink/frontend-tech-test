/*
 This case adds one or more tasks through an array into the tasks state of all
 tasks, it is created this way to be reused through fetch, update and create.
*/
import { allTasks } from '../../../factories/';
import { normalizeTasks } from '../../../utils';


const tasks = allTasks.tasks;

export default (state, { payload }) => ({
  ...state,
  ...tasks({ tasks: { ...state.tasks, ...normalizeTasks(payload.tasks) } }),
});
