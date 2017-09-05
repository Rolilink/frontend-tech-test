import { createSelector } from 'reselect';
import { getIsFetching, getError } from './createTask';

export default createSelector(
  [
    getIsFetching,
    getError,
  ],
  (isFetching, error) => ({
    isFetching,
    error,
  }),
);
