export interface Task {
  id: string;
  title: string;
  completed: boolean;
}

export interface GetTasksParams {
  limit?: number;
}
