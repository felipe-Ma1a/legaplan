import styles from "./styles.module.scss";

const DeleteTaskConfirmation = () => {
  return (
    <p className={styles.deleteText}>
      Tem certeza que você deseja deletar essa tarefa?
    </p>
  );
};

export default DeleteTaskConfirmation;
