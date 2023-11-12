'use client';

import { useState } from 'react';
import { type TasksGroup } from '@/lib/types';
import { Group } from './components/Group';

interface GroupedTasksProps {
  initialGroupedTasks: TasksGroup[];
}
export default function GroupedTasks({
  initialGroupedTasks,
}: GroupedTasksProps) {
  const [groupedTasks, setGroupedTasks] = useState(initialGroupedTasks);

  const createHandleChangeTask =
    (groupName: TasksGroup['name']) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setGroupedTasks((state) => {
        const newState = state.map((group) => {
          if (group.name !== groupName) return group;
          return {
            ...group,
            tasks: group.tasks.map((task) => {
              if (task.description !== event.target.value) return task;
              return {
                ...task,
                checked: event.target.checked,
              };
            }),
          };
        });
        return newState;
      });
    };
  return (
    <div>
      {groupedTasks.map((group) => (
        <Group
          key={group.name}
          tasksGroup={group}
          onChangeTask={createHandleChangeTask(group.name)}
        />
      ))}
    </div>
  );
}
