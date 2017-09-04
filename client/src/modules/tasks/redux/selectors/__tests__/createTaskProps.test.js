import getCreateTaskProps from '../createTaskProps';

jest.mock('../createTask', () => ({
  getIsFetching: () => true,
  getError: () => 'error',
}));


describe('Tasks.Redux.Selectors.getCreateTaskProps', () => {
  it('should get error prop', () => {
    expect(getCreateTaskProps().isFetching).toBe(true);
  });

  it('should get isFetching prop', () => {
    expect(getCreateTaskProps().error).toBe('error');
  });
});
