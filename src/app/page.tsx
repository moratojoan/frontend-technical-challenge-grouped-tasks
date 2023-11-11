'use client';

import { useState } from 'react';
import styles from './page.module.css';

interface Task {
  description: string;
  value: number;
  checked: boolean;
}
interface TasksGroup {
  name: string;
  tasks: Task[];
}

const progressData: TasksGroup[] = [
  {
    name: 'General Info',
    tasks: [
      {
        description: 'Add name and surname',
        value: 10,
        checked: true,
      },
      {
        description: 'Add email',
        value: 15,
        checked: false,
      },
      {
        description: 'Add linkedin profile',
        value: 8,
        checked: false,
      },
      {
        description: 'Provide websites page url',
        value: 5,
        checked: true,
      },
    ],
  },
  {
    name: 'Accomiplishments',
    tasks: [
      {
        description: 'Wrote a small poem about the birthday',
        value: 23,
        checked: false,
      },
      {
        description: 'Jump three times with one leg',
        value: 32,
        checked: true,
      },
      {
        description: 'Avoid the annoying neighbor',
        value: 2,
        checked: false,
      },
      {
        description: 'Say hello to a random person',
        value: 21,
        checked: false,
      },
      {
        description: 'Fill the description in at least 3 places',
        value: 12,
        checked: true,
      },
    ],
  },
  {
    name: 'Personal retrospective',
    tasks: [
      {
        description: 'Remember a dream',
        value: 15,
        checked: true,
      },
      {
        description: 'Have a crush',
        value: 7,
        checked: true,
      },
    ],
  },
  {
    name: 'Things before leaving',
    tasks: [
      {
        description: 'Say what you feel to all the people you know',
        value: 42,
        checked: false,
      },
      {
        description: 'Get a pet',
        value: 23,
        checked: false,
      },
      {
        description: 'Buy a fashion shirt',
        value: 12,
        checked: false,
      },
    ],
  },
];

export default function Home() {
  const [tasksGroups, setTasksGroups] = useState(progressData);

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
    <main className={styles.main}>
      <section>
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
      </section>
    </main>
  );
}
