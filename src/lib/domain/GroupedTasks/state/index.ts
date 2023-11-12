import { type Task, type TasksGroup } from '../types';

export function updateGroupedTasks(
  prevState: TasksGroup[],
  groupToChange: TasksGroup,
  taskToChange: Pick<Task, 'description' | 'checked'>
): TasksGroup[] {
  const newState = prevState.map((group) => {
    if (group.name !== groupToChange.name) return group;
    return {
      ...group,
      tasks: group.tasks.map((task) => {
        if (task.description !== taskToChange.description) return task;
        return {
          ...task,
          checked: taskToChange.checked,
        };
      }),
    };
  });
  return newState;
}
