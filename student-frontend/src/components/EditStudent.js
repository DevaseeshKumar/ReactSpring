// components/EditStudent.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EditStudent = ({ student, onSuccess }) => {
  const [formData, setFormData] = useState({ ...student });

  useEffect(() => {
    setFormData({ ...student });
  }, [student]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put('http://localhost:2013/student/update', formData);
      alert('Student updated successfully!');
      onSuccess();
    } catch (error) {
      alert('Error updating student: ' + (error.response?.data || error.message));
    }
  };

  return (
    <div className="form-container">
      <h2>Edit Student</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>

        <label>
          Gender:
          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </label>

        <label>
          Age:
          <input type="number" name="age" value={formData.age} onChange={handleChange} required />
        </label>

        <label>
          Department:
          <input type="text" name="department" value={formData.department} onChange={handleChange} required />
        </label>

        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>

        <label>
          Contact:
          <input type="text" name="contact" value={formData.contact} onChange={handleChange} required />
        </label>

        <button type="submit">Update Student</button>
      </form>
    </div>
  );
};

export default EditStudent;
