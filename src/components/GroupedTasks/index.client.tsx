'use client';

import { useState } from 'react';
import {
  type TasksGroup,
  updateGroupedTasks,
  calculateProgress,
} from '@/lib/domain/GroupedTasks';

import { Progress } from '@/components/ui/Progress';
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
        <Progress progress={progress} />
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
