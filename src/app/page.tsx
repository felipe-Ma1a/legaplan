import Header from "@/components/Header";
import Task from "@/components/Task";

import styles from "./page.module.scss";

export default function Home() {
  return (
    <>
      <Header />

      <main className={styles.main}>
        <section className={styles.tasksList}>
          <h2>Suas tarefas de hoje</h2>

          <Task text="Lavar as mãos" htmlFor="task1" id="task1" />
          <Task text="Fazer um bolo" htmlFor="task2" id="task2" />
          <Task text="Lavar a louça" htmlFor="task3" id="task3" />

          <h2>Tarefas finalizadas</h2>
        </section>

        <button className={styles.addNewTaskButton}>
          Adicionar nova tarefa
        </button>
      </main>
    </>
  );
}
