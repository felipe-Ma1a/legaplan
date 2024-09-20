import Image from "next/image";
import trash from "public/images/trash.svg";
import styles from "./styles.module.scss";

type TaskProps = {
  text: string;
  htmlFor: string;
  id: string;
  completed: boolean;
  onToggle: () => void;
  onDelete: () => void;
};

const Task = ({
  text,
  htmlFor,
  id,
  completed,
  onToggle,
  onDelete,
}: TaskProps) => {
  return (
    <div className={styles.task}>
      <div className={styles.taskGroup}>
        <input
          type="checkbox"
          id={id}
          checked={completed}
          onChange={onToggle}
        />
        <label htmlFor={htmlFor} className={completed ? styles.completed : ""}>
          {text}
        </label>
      </div>

      <button className={styles.taskButton} onClick={onDelete}>
        <Image
          src={trash}
          alt="Icone Lixeira"
          width={24}
          height={24}
          quality={100}
        />
      </button>
    </div>
  );
};

export default Task;
