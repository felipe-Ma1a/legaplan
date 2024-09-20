"use client";

import { useCallback } from "react";
import { ModalModeType } from "@/utils/types/modalType.type";

interface ModalHandlersProps {
  modalMode: ModalModeType;
  handleConfirmAddTask: () => void;
  handleConfirmDeleteTask: () => void;
}

export function useModalHandlers({
  modalMode,
  handleConfirmAddTask,
  handleConfirmDeleteTask,
}: ModalHandlersProps) {
  const handleConfirm = useCallback(() => {
    if (modalMode === "add") {
      handleConfirmAddTask();
    } else {
      handleConfirmDeleteTask();
    }
  }, [modalMode, handleConfirmAddTask, handleConfirmDeleteTask]);

  return {
    handleConfirm,
  };
}
