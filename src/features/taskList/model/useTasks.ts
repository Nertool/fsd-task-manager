import { useCallback, useEffect, useMemo, useState } from 'react';

import { useGetTasksQuery } from 'entities/task';

export enum Filter {
  All = 'all',
  Completed = 'completed',
  Incomplete = 'incomplete',
}

export function useTasks() {
  const { data: remoteTasks = [], isLoading, isError } = useGetTasksQuery();

  const [tasks, setTasks] = useState(remoteTasks);
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

  useEffect(() => {
    if (remoteTasks.length > 0 && tasks.length === 0) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTasks(remoteTasks);
    }
  }, [remoteTasks, tasks.length]);

  return {
    tasks: filteredTasks,
    filter,
    setFilter: onChangeFilter,
    removeTask,
    isLoading,
    isError,
  };
}
