import Image from "next/image";
import trash from "public/images/trash.svg";

import styles from "./styles.module.scss";

type TaskProps = {
  text: string;
  htmlFor: string;
  id: string;
};

const Task = ({ text, htmlFor, id }: TaskProps) => {
  return (
    <div className={styles.task}>
      <div className={styles.taskGroup}>
        <input type="checkbox" id={id} />
        <label htmlFor={htmlFor}>{text}</label>
      </div>

      <Image
        src={trash}
        alt="Icone Lixeira"
        width={24}
        height={24}
        quality={100}
      />
    </div>
  );
};

export default Task;
