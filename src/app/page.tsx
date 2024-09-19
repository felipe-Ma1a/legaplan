import Header from "@/components/Header";
import Task from "@/components/Task";

import styles from "./page.module.scss";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <section className={styles.tasks}>
          <h2>Suas tarefas de hoje</h2>

          <Task />
        </section>
      </main>
    </>
  );
}
