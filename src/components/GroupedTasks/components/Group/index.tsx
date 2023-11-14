import { useState } from 'react';
import { type TasksGroup } from '@/lib/domain/GroupedTasks';
import { Checkbox } from '@/components/ui/Checkbox';
import { Label } from '@/components/ui/Label';
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
      <ul className={styles.group_list}>
        {tasksGroup.tasks.map((task) => (
          <li key={task.description} className={styles.group_item}>
            <Label>
              <Checkbox
                checked={task.checked}
                onChange={onChangeTask}
                value={task.description}
              />
              {task.description}
            </Label>
          </li>
        ))}
      </ul>
    </details>
  );
}
