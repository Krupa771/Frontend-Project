import { useState, useContext } from "react";
import { TaskContext } from "../TaskContext";

export default function TaskCard({ task }) {
  const { deleteTask, editTask } = useContext(TaskContext);
  const [editing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);

  const handleEdit = () => {
    editTask(task.id, newTitle);
    setEditing(false);
  };

  return (
    <div className="flex justify-between p-2 mb-2 bg-white shadow rounded">
      {editing ? (
        <input
          className="border p-1 flex-1"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
      ) : (
        <span>{task.title}</span>
      )}

      <div className="flex gap-2">
        {editing ? (
          <button onClick={handleEdit} className="text-green-500 font-bold">✔</button>
        ) : (
          <button onClick={() => setEditing(true)} className="text-yellow-500 font-bold">✎</button>
        )}
        <button onClick={() => deleteTask(task.id)} className="text-red-500 font-bold">X</button>
      </div>
    </div>
  );
}
