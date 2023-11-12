'use client';

import { useState } from 'react';
import { type Task, type TasksGroup } from '@/lib/types';

interface ProgressProps {
  initialProgressData: TasksGroup[];
}
export default function Progress({ initialProgressData }: ProgressProps) {
  const [tasksGroups, setTasksGroups] = useState(initialProgressData);

  const createHandleToggleCheckbox =
    (groupName: TasksGroup['name'], taskToggled: Task) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setTasksGroups((state) => {
        const newState = state.map((group) => {
          if (group.name !== groupName) return group;
          return {
            ...group,
            tasks: group.tasks.map((task) => {
              if (task.description !== taskToggled.description) return task;
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
      {tasksGroups.map((group) => (
        <details key={group.name}>
          <summary>{group.name}</summary>
          <ul>
            {group.tasks.map((task) => (
              <li key={task.description}>
                <label>
                  <input
                    type="checkbox"
                    checked={task.checked}
                    onChange={createHandleToggleCheckbox(group.name, task)}
                    value={task.description}
                  />
                  {task.description}
                </label>
              </li>
            ))}
          </ul>
        </details>
      ))}
    </div>
  );
}
