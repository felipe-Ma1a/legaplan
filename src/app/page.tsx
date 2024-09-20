"use client";

import Header from "@/components/Header";
import TaskList from "@/components/TaskList";
import Modal from "@/components/Modal";
import { useTasks } from "@/utils/hooks/useTasks";
import { useModal } from "@/utils/hooks/useModal";
import styles from "./page.module.scss";

export default function Home() {
  const {
    activeTasks,
    completedTasks,
    newTaskText,
    setNewTaskText,
    handleAddTask,
    handleToggleTask,
    handleDeleteTask,
  } = useTasks([
    { id: "task1", text: "Lavar as mãos", completed: false },
    { id: "task2", text: "Fazer um bolo", completed: false },
    { id: "task3", text: "Lavar a louça", completed: false },
  ]);

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

  const handleConfirm = () => {
    if (modalMode === "add") {
      const error = handleAddTask();
      if (error) {
        setErrorMessage(error);
      } else {
        closeModal();
      }
    } else {
      handleDeleteTask(taskToDelete?.id || "");
      closeModal();
    }
  };

  return (
    <>
      <Header />

      <main className={styles.main}>
        <section className={styles.tasksList}>
          {activeTasks.length > 0 && (
            <TaskList
              tasks={activeTasks}
              title="Suas tarefas de hoje"
              onToggle={handleToggleTask}
              onDelete={openDeleteModal}
            />
          )}

          {completedTasks.length > 0 && (
            <TaskList
              tasks={completedTasks}
              title="Tarefas finalizadas"
              onToggle={handleToggleTask}
              onDelete={openDeleteModal}
            />
          )}
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
            {modalMode === "add" ? (
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
                {errorMessage && (
                  <p className={styles.errorMessage}>{errorMessage}</p>
                )}
              </div>
            ) : (
              <p className={styles.deleteText}>
                Tem certeza que você deseja deletar essa tarefa?
              </p>
            )}
          </Modal>
        )}
      </main>
    </>
  );
}
