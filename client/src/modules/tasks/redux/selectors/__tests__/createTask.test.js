import { getIsFetching, getError } from '../createTask';

jest.mock('../state', () => (
  () => ({
    createTask: {
      isFetching: true,
      error: 'error',
    },
  })
));

describe('Tasks.Redux.Selectors.CreateTask.getIsFetching', () => {
  it('should get if tasks are being fetched', () => {
    expect(getIsFetching()).toBe(true);
  });
});

describe('Tasks.Redux.Selectors.CreateTask.getError', () => {
  it('should get if there was an error fetching the tasks', () => {
    expect(getError()).toBe('error');
  });
});
