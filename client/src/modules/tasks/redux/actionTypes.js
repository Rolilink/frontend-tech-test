import { PENDING, FULFILLED, REJECTED } from 'redux-promise-middleware';

export const FETCH_TASKS = 'travix/front-end-test/tasks/FETCH_TASKS';
export const FETCH_TASKS_SUCCESS = `${FETCH_TASKS}_${FULFILLED}`;
export const FETCH_TASKS_ERROR = `${FETCH_TASKS}_${REJECTED}`;
export const FETCH_TASKS_LOADING = `${FETCH_TASKS}_${PENDING}`;

export const CREATE_TASK = 'travix/front-end-test/tasks/CREATE_TASK';
export const CREATE_TASK_SUCCESS = `${CREATE_TASK}_${FULFILLED}`;
export const CREATE_TASK_ERROR = `${CREATE_TASK}_${REJECTED}`;
export const CREATE_TASK_LOADING = `${CREATE_TASK}_${PENDING}`;
