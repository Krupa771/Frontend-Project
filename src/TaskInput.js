import { useState, useContext } from "react";
import { TaskContext } from "./TaskContext";

export default function TaskInput() {
  const { addTask } = useContext(TaskContext);
  const [title, setTitle] = useState("");

  const handleAdd = () => {
    if (!title.trim()) return;
    addTask({ id: Date.now(), title });
    setTitle("");
  };

  return (
    <div className="flex gap-2 mb-4">
      <input
        type="text"
        placeholder="Add a task"
        className="flex-1 p-2 border rounded"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        onClick={handleAdd}
        className="bg-blue-500 text-white px-4 rounded hover:bg-blue-600"
      >
        Add
      </button>
    </div>
  );
}
