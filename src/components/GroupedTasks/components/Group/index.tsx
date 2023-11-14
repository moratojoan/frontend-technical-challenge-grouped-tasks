import { useState } from 'react';
import { type TasksGroup } from '@/lib/domain/GroupedTasks';
import { Summary } from './components/Summary';
import styles from './styles.module.css';

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
      <Summary open={open} onClick={toggleOpen} tasksGroup={tasksGroup} />
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
