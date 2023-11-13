'use client';

import { useState } from 'react';
import {
  type TasksGroup,
  updateGroupedTasks,
  calculateProgress,
} from '@/lib/domain/GroupedTasks';
import { Group } from './components/Group';
import styles from './styles.module.css';

interface GroupedTasksProps {
  initialGroupedTasks: TasksGroup[];
}

export default function GroupedTasks({
  initialGroupedTasks,
}: GroupedTasksProps) {
  const [groupedTasks, setGroupedTasks] = useState(initialGroupedTasks);

  const createHandleChangeTask =
    (groupToChange: TasksGroup) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setGroupedTasks((state) => {
        const taskToChange = {
          description: event.target.value,
          checked: event.target.checked,
        };
        const newState = updateGroupedTasks(state, groupToChange, taskToChange);
        return newState;
      });
    };

  const progress = calculateProgress(groupedTasks);
  return (
    <article className={styles.groupedTasks_wrapper}>
      <header className={styles.groupedTasks_header}>
        <h3 className={styles.groupedTasks_title}>Lodgify Grouped Tasks</h3>
        <div className={styles.progress}>
          <div
            className={styles.progress_bar}
            role="progressbar"
            style={{ width: `${progress}%` }}
            aria-valuenow={25}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <span>{progress}%</span>
          </div>
        </div>
      </header>
      {groupedTasks.map((group) => (
        <Group
          key={group.name}
          tasksGroup={group}
          onChangeTask={createHandleChangeTask(group)}
        />
      ))}
    </article>
  );
}
