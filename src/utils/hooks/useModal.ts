import { useState } from "react";
import { TaskType } from "@/utils/types/taskType.type";

export const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"add" | "delete">("add");
  const [taskToDelete, setTaskToDelete] = useState<TaskType | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const openAddModal = () => {
    setModalMode("add");
    setErrorMessage(null);
    setIsModalOpen(true);
  };

  const openDeleteModal = (task: TaskType) => {
    setTaskToDelete(task);
    setModalMode("delete");
    setErrorMessage(null);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTaskToDelete(null);
    setErrorMessage(null);
  };

  return {
    isModalOpen,
    modalMode,
    taskToDelete,
    errorMessage,
    setErrorMessage,
    openAddModal,
    openDeleteModal,
    closeModal,
  };
};
