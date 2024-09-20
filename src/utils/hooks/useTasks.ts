"use client";

import { useState } from "react";
import { TaskType } from "@/utils/types/taskType.type";
import { addTask, toggleTaskCompletion } from "@/utils/taskUtils";

export const useTasks = () => {
  const [tasks, setTasks] = useState<TaskType[]>([
    { id: "task1", text: "Lavar as mãos", completed: false },
    { id: "task2", text: "Fazer um bolo", completed: false },
    { id: "task3", text: "Lavar a louça", completed: false },
    { id: "task4", text: "Levar o lixo para fora", completed: true },
  ]);

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
