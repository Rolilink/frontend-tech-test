// TODO: this isn't working for some reason check this

import nock from 'nock';
import TasksService from '../Tasks';

import { REACT_APP_API_HOST } from '../../constants';
import { taskFactory } from '../../__tests__/testUtils/tasks';

const Tasks = new TasksService(REACT_APP_API_HOST);
const task = taskFactory({ id: 1 });

const mockHttp = () => (
  nock(REACT_APP_API_HOST)
    .post('/api/tasks', (body) => {
      const { title, description } = body;

      return !!title && !!description;
    })
    .reply((uri, requestBody) => {
      const { title, description } = JSON.parse(requestBody);

      return {
        task: {
          id: 1,
          title,
          description,
        },
      };
    })
);

const restoreMock = () => nock.restore();

describe('Services.Tasks.createTask', () => {
  let serverMock;

  beforeAll(() => {
    serverMock = mockHttp();
  });

  afterAll(() => {
    restoreMock();
  });

  it('should create a task posting to /api/tasks', () => (
    Tasks.createTask(task).then((response) => {
      expect(serverMock.isDone()).toBe(true);
      expect(response.task).toEqual(taskFactory({ id: 1 }));
    })
  ));
});
