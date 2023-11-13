import { TasksGroup } from '../types';

function sum(a: number, b: number): number {
  return a + b;
}

function calculateNormalizedValue(
  scalarValue: number,
  sumOfAllTasksValues: number
): number {
  const normalizedValue = (scalarValue * 100) / sumOfAllTasksValues;
  return normalizedValue;
}

export function calculateProgress(groupedTasks: TasksGroup[]): number {
  const allValues = groupedTasks.flatMap((group) => {
    return group.tasks.map((task) => task.value);
  });
  const allCheckedTasksValues = groupedTasks.flatMap((group) => {
    return group.tasks.filter((task) => task.checked).map((task) => task.value);
  });

  const sumOfAllTasksValues = allValues.reduce(sum, 0);
  const normalizedValues = allCheckedTasksValues.map((value) =>
    calculateNormalizedValue(value, sumOfAllTasksValues)
  );

  const progress = normalizedValues.reduce(sum, 0);
  return Number(progress.toFixed(2));
}

export function checkIfAllTaskAreCompleted(tasksGroup: TasksGroup) {
  return tasksGroup.tasks.every(({ checked }) => checked);
}
