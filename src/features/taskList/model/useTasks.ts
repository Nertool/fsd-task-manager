import { useCallback, useMemo, useState } from 'react';

import type { Task } from 'entities/task';

const initial: Task[] = [
  { id: '1', title: 'Изучить архитектуру', completed: true },
  { id: '2', title: 'Изучить мемоизацию', completed: false },
  { id: '3', title: 'Изучить еще что-нибудь', completed: false },
  { id: '4', title: 'Сдать домашу вовремя', completed: false },
  { id: '5', title: 'Защитить проект', completed: false },
];

export enum Filter {
  All = 'all',
  Completed = 'completed',
  Incomplete = 'incomplete',
}

export function useTasks() {
  const [tasks, setTasks] = useState(initial);
  const [filter, setFilter] = useState<Filter>(Filter.All);

  const completeTasks = useMemo(
    () => tasks.filter(task => task.completed),
    [tasks],
  );

  const incompleteTasks = useMemo(
    () => tasks.filter(task => !task.completed),
    [tasks],
  );

  const onChangeFilter = useCallback((filterValue: Filter) => {
    setFilter(filterValue);
  }, []);

  const removeTask = useCallback((id: string) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  }, []);

  const filteredTasks = {
    [Filter.Completed]: completeTasks,
    [Filter.Incomplete]: incompleteTasks,
    [Filter.All]: tasks,
  }[filter];

  return {
    tasks: filteredTasks,
    filter,
    setFilter: onChangeFilter,
    removeTask,
  };
}
