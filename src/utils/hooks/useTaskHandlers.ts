"use client";

import { useCallback } from "react";
import { TaskType } from "@/utils/types/taskType.type";

interface TaskHandlersProps {
  taskToDelete: TaskType | null;
  handleAddTask: () => string | null;
  handleDeleteTask: (id: string) => void;
  setErrorMessage: (message: string | null) => void;
  closeModal: () => void;
  errorMessage: string | null;
}

export function useTaskHandlers({
  handleAddTask,
  handleDeleteTask,
  taskToDelete,
  closeModal,
  setErrorMessage,
}: TaskHandlersProps) {
  const handleConfirmAddTask = useCallback(() => {
    const error = handleAddTask();
    if (error) {
      setErrorMessage(error);
    } else {
      closeModal();
    }
  }, [handleAddTask, closeModal, setErrorMessage]);

  const handleConfirmDeleteTask = useCallback(() => {
    if (taskToDelete) {
      handleDeleteTask(taskToDelete.id);
      closeModal();
    }
  }, [taskToDelete, handleDeleteTask, closeModal]);

  return {
    handleConfirmAddTask,
    handleConfirmDeleteTask,
  };
}
