import React from "react";

function StudentList({ students, setStudents, setEditStudent }) {

  // DELETE
  const deleteStudent = (id) => {
    fetch(`http://localhost:3001/students/${id}`, {
      method: "DELETE"
    }).then(() => {
      setStudents(students.filter(s => s.id !== id));
    });
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Course</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student.id}>
            <td>{student.name}</td>
            <td>{student.course}</td>
            <td>
              <button onClick={() => setEditStudent(student)}>
                Edit
              </button>
              <button onClick={() => deleteStudent(student.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default StudentList;
