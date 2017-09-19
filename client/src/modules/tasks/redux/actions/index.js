import { createAction } from 'redux-actions';
import { FETCH_TASKS, CREATE_TASK } from '../actionTypes';
import Tasks from '../../../../services/Tasks';

console.log(Tasks);

const tasksService = new Tasks();

export const fetchTasks = createAction(FETCH_TASKS, () => tasksService.fetchTasks());
export const createTask = createAction(CREATE_TASK, task => tasksService.createTask(task));
