import { TaskType } from "@/utils/types/taskType.type";
import Task from "./Task";

type TaskListProps = {
  tasks: TaskType[];
  title: string;
  onToggle: (id: string) => void;
  onDelete: (task: TaskType) => void;
};

const TaskList = ({ tasks, title, onToggle, onDelete }: TaskListProps) => (
  <>
    <h2>{title}</h2>
    {tasks.map((task) => (
      <Task
        key={task.id}
        text={task.text}
        htmlFor={task.id}
        id={task.id}
        completed={task.completed}
        onToggle={() => onToggle(task.id)}
        onDelete={() => onDelete(task)}
      />
    ))}
  </>
);

export default TaskList;
