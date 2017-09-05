import * as actionTypes from './actionTypes';
import * as factories from './factories';
import * as selectors from './selectors';
import * as utils from './utils';

import { fetchTasks, createTask } from './actions';

import reducerModule from './reducers';

const reducer = {
  name: 'tasks', reducer: reducerModule,
};

export {
  fetchTasks,
  createTask,
  actionTypes,
  factories,
  selectors,
  reducer,
  utils,
};
