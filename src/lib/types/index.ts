export interface Task {
  description: string;
  value: number;
  checked: boolean;
}
export interface TasksGroup {
  name: string;
  tasks: Task[];
}
