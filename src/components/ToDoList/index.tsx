"use client";

import TaskList from "@/components/ToDoList/TaskList";
import Modal from "@/components/ToDoList/Modal";
import AddTaskForm from "@/components/ToDoList/Modal/AddTaskForm";
import DeleteTaskConfirmation from "@/components/ToDoList/Modal/DeleteTaskConfirmation";

import { useTasks } from "@/utils/hooks/useTasks";
import { useModal } from "@/utils/hooks/useModal";
import { useTaskHandlers } from "@/utils/hooks/useTaskHandlers";
import { useModalHandlers } from "@/utils/hooks/useModalHandlers";
import { TaskType } from "@/utils/types/taskType.type";

import styles from "./styles.module.scss";

const ToDoList = () => {
  const {
    activeTasks,
    completedTasks,
    newTaskText,
    setNewTaskText,
    handleAddTask,
    handleToggleTask,
    handleDeleteTask,
  } = useTasks();

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

  const { handleConfirmAddTask, handleConfirmDeleteTask } = useTaskHandlers({
    handleAddTask,
    handleDeleteTask,
    taskToDelete,
    closeModal,
    setErrorMessage,
    errorMessage,
  });

  const { handleConfirm } = useModalHandlers({
    modalMode,
    handleConfirmAddTask,
    handleConfirmDeleteTask,
  });

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
          {modalMode === "add" ? (
            <AddTaskForm
              newTaskText={newTaskText}
              setNewTaskText={setNewTaskText}
              errorMessage={errorMessage}
              setErrorMessage={setErrorMessage}
            />
          ) : (
            <DeleteTaskConfirmation />
          )}
        </Modal>
      )}
    </main>
  );
};

export default ToDoList;
