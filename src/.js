// src/components/Students.js
import React, { useEffect, useState } from "react";
import axios from "axios";

function Students() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [editId, setEditId] = useState(null);

  // READ (Get students)
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setStudents(res.data));
  }, []);

  // CREATE & UPDATE
  const handleSubmit = () => {
    if (editId) {
      // UPDATE
      axios.put(`https://jsonplaceholder.typicode.com/users/${editId}`, {
        name: name
      }).then(() => {
        setStudents(
          students.map((s) =>
            s.id === editId ? { ...s, name } : s
          )
        );
        setEditId(null);
        setName("");
      });
    } else {
      // CREATE
      axios.post("https://jsonplaceholder.typicode.com/users", {
        name: name
      }).then((res) => {
        setStudents([...students, res.data]);
        setName("");
      });
    }
  };

  // DELETE
  const deleteStudent = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(() => {
        setStudents(students.filter((s) => s.id !== id));
      });
  };

  // EDIT
  const editStudent = (student) => {
    setEditId(student.id);
    setName(student.name);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter student name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleSubmit}>
        {editId ? "Update" : "Add"}
      </button>

      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name}
            <button onClick={() => editStudent(student)}>Edit</button>
            <button onClick={() => deleteStudent(student.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Students;
