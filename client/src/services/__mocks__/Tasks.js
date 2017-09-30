let fetchTasksPromiseFn = () => {};
let createTaskPromiseFn = () => {};

function __setCreateTaskPromiseFn(fn) {
  createTaskPromiseFn = fn;
}

function __setFetchTasksPromiseFn(fn) {
  fetchTasksPromiseFn = fn;
}

export default class TasksFake {
  get fetchTasks() {
    return jest.fn(() => new Promise(fetchTasksPromiseFn));
  }

  get createTask() {
    return jest.fn(() => new Promise(createTaskPromiseFn));
  }
}

export {
  __setCreateTaskPromiseFn,
  __setFetchTasksPromiseFn,
};
