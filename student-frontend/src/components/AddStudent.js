// components/AddStudent.js
import React, { useState } from 'react';
import axios from 'axios';

const AddStudent = ({ onSuccess }) => {
  const [student, setStudent] = useState({
    name: '',
    gender: '',
    age: '',
    department: '',
    email: '',
    contact: ''
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:2013/student/add', student);
      alert('Student added successfully!');
      onSuccess();
    } catch (error) {
      alert('Error adding student: ' + (error.response?.data || error.message));
    }
  };

  return (
    <div className="form-container">
      <h2>Add New Student</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={student.name} onChange={handleChange} required />
        </label>

        <label>
          Gender:
          <select name="gender" value={student.gender} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </label>

        <label>
          Age:
          <input type="number" name="age" value={student.age} onChange={handleChange} required />
        </label>

        <label>
          Department:
          <input type="text" name="department" value={student.department} onChange={handleChange} required />
        </label>

        <label>
          Email:
          <input type="email" name="email" value={student.email} onChange={handleChange} required />
        </label>

        <label>
          Contact:
          <input type="text" name="contact" value={student.contact} onChange={handleChange} required />
        </label>

        <button type="submit">Add Student</button>
      </form>
    </div>
  );
};

export default AddStudent;
