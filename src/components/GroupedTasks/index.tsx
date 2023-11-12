'use client';

import { useState } from 'react';
import { Group } from './components/Group';
import {
  type TasksGroup,
  updateGroupedTasks,
  calculateProgress,
} from '@/lib/GroupedTasks';

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
    <article>
      <header>
        <h3>Lodgify Grouped Tasks</h3>
        <p>{progress}%</p>
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
