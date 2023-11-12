import { type TasksGroup } from '@/lib/domain/GroupedTasks';

interface GroupProps {
  tasksGroup: TasksGroup;
  onChangeTask: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export function Group({ tasksGroup, onChangeTask }: GroupProps) {
  return (
    <details>
      <summary>{tasksGroup.name}</summary>
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
