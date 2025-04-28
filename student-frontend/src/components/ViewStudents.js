// components/ViewStudents.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewStudents = ({ onEdit }) => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get('http://localhost:2013/student/viewall');
      setStudents(response.data);
      setLoading(false);
    } catch (error) {
      alert('Error fetching students: ' + error.message);
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      try {
        await axios.delete(`http://localhost:2013/student/delete?id=${id}`);
        fetchStudents();
        alert('Student deleted successfully!');
      } catch (error) {
        alert('Error deleting student: ' + error.message);
      }
    }
  };

  return (
    <div className="student-list">
      <h2>Student List</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>Age</th>
              <th>Department</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.gender}</td>
                <td>{student.age}</td>
                <td>{student.department}</td>
                <td>{student.email}</td>
                <td>{student.contact}</td>
                <td>
                  <button onClick={() => onEdit(student)}>Edit</button>
                  <button onClick={() => handleDelete(student.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ViewStudents;
