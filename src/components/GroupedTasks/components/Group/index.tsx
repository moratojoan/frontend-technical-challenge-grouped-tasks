import { type TasksGroup } from '@/lib/domain/GroupedTasks';

import styles from './styles.module.css';
import { useState } from 'react';
import { ChevronUp } from '@/components/ui/icons/ChevronUp';
import { ChevronDown } from '@/components/ui/icons/ChevronDown';

interface GroupProps {
  tasksGroup: TasksGroup;
  onChangeTask: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export function Group({ tasksGroup, onChangeTask }: GroupProps) {
  const [open, setOpen] = useState(false);

  const toggleOpen = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setOpen((state) => !state);
  };

  return (
    <details className={styles.group} open={open}>
      <summary onClick={toggleOpen} className={styles.group_summary}>
        <span>{tasksGroup.name}</span>
        <span>
          {open ? (
            <>
              {'Hide'} <ChevronUp />
            </>
          ) : (
            <>
              {'Show'} <ChevronDown />
            </>
          )}
        </span>
      </summary>
      <ul>
        {tasksGroup.tasks.map((task) => (
          <li key={task.description}>
            <label>
              <input
                type="checkbox"
                checked={task.checked}
                onChange={onChangeTask}
                value={task.description}
              />
              {task.description}
            </label>
          </li>
        ))}
      </ul>
    </details>
  );
}
