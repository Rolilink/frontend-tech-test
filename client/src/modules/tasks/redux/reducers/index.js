import { combineReducers } from 'redux';

import allTasks from './allTasks';
import createTask from './createTask';

export {
  allTasks,
  createTask,
};

export default combineReducers({
  allTasks,
  createTask,
});
