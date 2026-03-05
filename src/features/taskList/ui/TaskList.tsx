import { type Task, TaskCard } from 'entities/task';
import { Filter } from 'features/taskList';
import { TaskFilter } from 'features/taskFilter';

type Props = {
  tasks: Task[];
  filter: Filter;
  setFilter: (filter: Filter) => void;
  removeTask: (id: string) => void;
  isLoading: boolean;
  isError: boolean;
};

export function TaskList({
  tasks,
  filter,
  setFilter,
  removeTask,
  isLoading,
  isError,
}: Props) {
  if (isLoading) {
    return (
      <>
        <TaskFilter filter={filter} setFilter={setFilter} />
        <div>Загрузка...</div>
      </>
    );
  }

  if (isError) {
    return (
      <>
        <TaskFilter filter={filter} setFilter={setFilter} />
        <div>Ошибка</div>
      </>
    );
  }

  if (tasks.length === 0) {
    return (
      <>
        <TaskFilter filter={filter} setFilter={setFilter} />
        <div>Нет задач</div>
      </>
    );
  }

  return (
    <>
      <TaskFilter filter={filter} setFilter={setFilter} />

      {tasks.map(task => (
        <TaskCard key={task.id} task={task} removeTask={removeTask} />
      ))}
    </>
  );
}
