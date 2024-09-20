import { TaskType } from "./types/taskType.type";

export const toggleTaskCompletion = (tasks: TaskType[], taskId: string) =>
  tasks.map((task) =>
    task.id === taskId ? { ...task, completed: !task.completed } : task
  );

export const addTask = (tasks: TaskType[], newTaskText: string): TaskType[] => [
  ...tasks,
  {
    id: `task${tasks.length + 1}`,
    text: newTaskText,
    completed: false,
  },
];
