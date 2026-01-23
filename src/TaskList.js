import { useContext } from "react";
import { TaskContext } from "../TaskContext";
import TaskCard from "./TaskCard";

export default function TaskList() {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0)
    return <p className="text-gray-500">No tasks yet.</p>;

  return (
    <div>
      {tasks.map(task => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}
