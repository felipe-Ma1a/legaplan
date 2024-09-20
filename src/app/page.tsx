"use client";

import { useCallback } from "react";

import Header from "@/components/Header";
import TaskList from "@/components/TaskList";
import Modal from "@/components/Modal";

import { useTasks } from "@/utils/hooks/useTasks";
import { useModal } from "@/utils/hooks/useModal";
import { TaskType } from "@/utils/types/taskType.type";

import styles from "./page.module.scss";

const initialTasks = [
  { id: "task1", text: "Lavar as mãos", completed: false },
  { id: "task2", text: "Fazer um bolo", completed: false },
  { id: "task3", text: "Lavar a louça", completed: false },
];

export default function Home() {
  const {
    activeTasks,
    completedTasks,
    newTaskText,
    setNewTaskText,
    handleAddTask,
    handleToggleTask,
    handleDeleteTask,
  } = useTasks(initialTasks);

  const {
    isModalOpen,
    modalMode,
    taskToDelete,
    errorMessage,
    setErrorMessage,
    openAddModal,
    openDeleteModal,
    closeModal,
  } = useModal();

  const confirmAddTask = useCallback(() => {
    const error = handleAddTask();
    if (error) {
      setErrorMessage(error);
    } else {
      closeModal();
    }
  }, [handleAddTask, closeModal, setErrorMessage]);

  const confirmDeleteTask = useCallback(() => {
    handleDeleteTask(taskToDelete?.id || "");
    closeModal();
  }, [taskToDelete, handleDeleteTask, closeModal]);

  const handleConfirm = useCallback(() => {
    modalMode === "add" ? confirmAddTask() : confirmDeleteTask();
  }, [modalMode, confirmAddTask, confirmDeleteTask]);

  const renderAddTaskContent = () => (
    <div className={styles.modalInputGroup}>
      <label>Título</label>
      <input
        type="text"
        placeholder="Digite"
        value={newTaskText}
        onChange={(e) => {
          setNewTaskText(e.target.value);
          if (errorMessage) setErrorMessage(null);
        }}
        className={errorMessage ? styles.errorInput : ""}
      />
      {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
    </div>
  );

  const renderDeleteTaskContent = () => (
    <p className={styles.deleteText}>
      Tem certeza que você deseja deletar essa tarefa?
    </p>
  );

  const renderTaskList = (tasks: TaskType[], title: string) =>
    tasks.length > 0 && (
      <TaskList
        tasks={tasks}
        title={title}
        onToggle={handleToggleTask}
        onDelete={openDeleteModal}
      />
    );

  return (
    <>
      <Header />

      <main className={styles.main}>
        <section className={styles.tasksList}>
          {renderTaskList(activeTasks, "Suas tarefas de hoje")}
          {renderTaskList(completedTasks, "Tarefas finalizadas")}
        </section>

        <button className={styles.addNewTaskButton} onClick={openAddModal}>
          Adicionar nova tarefa
        </button>

        {isModalOpen && (
          <Modal
            title={modalMode === "add" ? "Nova tarefa" : "Deletar tarefa"}
            onClose={closeModal}
            onConfirm={handleConfirm}
            confirmText={modalMode === "add" ? "Adicionar" : "Deletar"}
            confirmButtonClass={
              modalMode === "add" ? styles.addButton : styles.deleteButton
            }
          >
            {modalMode === "add"
              ? renderAddTaskContent()
              : renderDeleteTaskContent()}
          </Modal>
        )}
      </main>
    </>
  );
}
