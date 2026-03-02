import { type Task, TaskCard } from 'entities/task';
import { Filter } from 'features/taskList';
import { TaskFilter } from 'features/taskFilter';

type Props = {
  tasks: Task[];
  filter: Filter;
  setFilter: (filter: Filter) => void;
  removeTask: (id: string) => void;
};

export function TaskList({ tasks, filter, setFilter, removeTask }: Props) {
  return (
    <>
      <TaskFilter filter={filter} setFilter={setFilter} />

      {tasks.length ? (
        tasks.map(task => (
          <TaskCard key={task.id} task={task} removeTask={removeTask} />
        ))
      ) : (
        <div>Нет задач</div>
      )}
    </>
  );
}
