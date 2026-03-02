import { memo } from 'react';

import { Filter } from 'features/taskList';
import { Button } from 'shared/ui/Button';

import styles from './TaskFilter.module.css';

type Props = {
  filter: Filter;
  setFilter: (filter: Filter) => void;
};

export const TaskFilter = memo(function ({ filter, setFilter }: Props) {
  return (
    <div className={styles.filter}>
      <Button
        onClick={() => setFilter(Filter.All)}
        isActive={filter === Filter.All}
      >
        Все
      </Button>
      <Button
        onClick={() => setFilter(Filter.Completed)}
        isActive={filter === Filter.Completed}
      >
        Выполненные
      </Button>
      <Button
        onClick={() => setFilter(Filter.Incomplete)}
        isActive={filter === Filter.Incomplete}
      >
        Не выполненные
      </Button>
    </div>
  );
});
