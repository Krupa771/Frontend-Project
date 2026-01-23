import React, { useEffect, useState } from "react";

function StudentForm({ students, setStudents, editStudent, setEditStudent }) {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");

  useEffect(() => {
    if (editStudent) {
      setName(editStudent.name);
      setCourse(editStudent.course);
    }
  }, [editStudent]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editStudent) {
      fetch(`http://localhost:3001/students/${editStudent.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, course })
      })
        .then(res => res.json())
        .then(updated => {
          setStudents(
            students.map(s =>
              s.id === updated.id ? updated : s
            )
          );
          setEditStudent(null);
          setName("");
          setCourse("");
        });
    } else {
      fetch("http://localhost:3001/students", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, course })
      })
        .then(res => res.json())
        .then(newStudent => {
          setStudents([...students, newStudent]);
          setName("");
          setCourse("");
        });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Name"
        required
      />
      <input
        value={course}
        onChange={e => setCourse(e.target.value)}
        placeholder="Course"
        required
      />
      <button type="submit">
        {editStudent ? "Update" : "Add"}
      </button>
    </form>
  );
}

export default StudentForm;
