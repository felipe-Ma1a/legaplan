import { useState } from "react";
import { TaskType } from "@/utils/types/taskType.type";
import { addTask, toggleTaskCompletion } from "@/utils/taskUtils";

export const useTasks = (initialTasks: TaskType[]) => {
  const [tasks, setTasks] = useState<TaskType[]>(initialTasks);
  const [newTaskText, setNewTaskText] = useState("");

  const handleToggleTask = (taskId: string) => {
    setTasks((prevTasks) => toggleTaskCompletion(prevTasks, taskId));
  };

  const handleAddTask = () => {
    if (!newTaskText.trim()) {
      return "O nome da tarefa não pode estar vazio!";
    }
    setTasks((prevTasks) => addTask(prevTasks, newTaskText));
    setNewTaskText("");
    return null;
  };

  const handleDeleteTask = (taskId: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const activeTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  return {
    tasks,
    activeTasks,
    completedTasks,
    newTaskText,
    setNewTaskText,
    handleToggleTask,
    handleAddTask,
    handleDeleteTask,
  };
};
