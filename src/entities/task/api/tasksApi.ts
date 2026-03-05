import type { Task, GetTasksParams } from 'entities/task';
import { baseApi } from 'shared';

export const tasksApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getTasks: build.query<Task[], GetTasksParams | void>({
      query: args => {
        const { limit = 20 } = args ?? {};

        return {
          url: 'todos',
          params: { _limit: limit },
        };
      },
      transformResponse: (response: Task[]) => response,
      providesTags: ['Tasks'],
    }),
  }),
  overrideExisting: false,
});

export const { useGetTasksQuery } = tasksApi;
