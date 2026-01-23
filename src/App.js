import React, { useEffect, useState } from "react";
import StudentForm from "./StudentForm";
import StudentList from "./StudentList";

function App() {
  const [students, setStudents] = useState([]);
  const [editStudent, setEditStudent] = useState(null);

  // READ: Fetch all students from JSON server
  useEffect(() => {
    fetch("http://localhost:3001/students")
      .then(res => res.json())
      .then(data => setStudents(data));
  }, []);

  return (
    <div className="container">
      <h1>Student Deatils</h1>

      {/* CREATE + UPDATE */}
      <StudentForm
        students={students}
        setStudents={setStudents}
        editStudent={editStudent}
        setEditStudent={setEditStudent}
      />

      {/* READ + DELETE */}
      <StudentList
        students={students}
        setStudents={setStudents}
        setEditStudent={setEditStudent}
      />
    </div>
  );
}

export default App;