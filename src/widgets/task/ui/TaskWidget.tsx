import { TaskList, useTasks } from 'features/taskList';

export function TaskWidget() {
  const { tasks, filter, setFilter, removeTask, isLoading, isError } =
    useTasks();

  return (
    <TaskList
      tasks={tasks}
      filter={filter}
      setFilter={setFilter}
      removeTask={removeTask}
      isLoading={isLoading}
      isError={isError}
    />
  );
}
