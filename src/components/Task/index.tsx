import Image from "next/image";
import trash from "public/images/trash.svg";

import styles from "./styles.module.scss";

const Task = () => {
  return (
    <div className={styles.task}>
      <div className={styles.taskGroup}>
        <input type="checkbox" name="" id="" />
        <p>Lavar as mãos</p>
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
