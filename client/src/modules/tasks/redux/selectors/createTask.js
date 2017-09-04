import { createSelector } from 'reselect';
import getState from './state';


export const getIsFetching = createSelector(
  getState,
  state => state.createTask.isFetching,
);

export const getError = createSelector(
  getState,
  state => state.createTask.error,
);
