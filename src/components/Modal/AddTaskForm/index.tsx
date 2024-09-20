import styles from "./styles.module.scss"

type AddTaskFormProps  = {
    newTaskText: string;
    setNewTaskText: (text: string) => void;
    errorMessage: string | null;
    setErrorMessage: (message: string | null) => void;
  }

const AddTaskForm = ({newTaskText, setNewTaskText, errorMessage, setErrorMessage}: AddTaskFormProps) => {
    return (
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
}

export default AddTaskForm