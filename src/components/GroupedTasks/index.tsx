'use client';

import { useState } from 'react';
import { Group } from './components/Group';
import { type TasksGroup, updateGroupedTasks } from '@/lib/GroupedTasks';

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
  return (
    <div>
      {groupedTasks.map((group) => (
        <Group
          key={group.name}
          tasksGroup={group}
          onChangeTask={createHandleChangeTask(group)}
        />
      ))}
    </div>
  );
}
