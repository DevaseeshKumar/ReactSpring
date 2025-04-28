// App.js
import React, { useState } from 'react';
import AddStudent from './components/AddStudent';
import ViewStudents from './components/ViewStudents';
import EditStudent from './components/EditStudent';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedStudent, setSelectedStudent] = useState(null);

  return (
    <div className="App">
      <nav className="navbar">
        <button onClick={() => setCurrentPage('home')}>Home</button>
        <button onClick={() => setCurrentPage('add')}>Add Student</button>
        <button onClick={() => setCurrentPage('view')}>View Students</button>
      </nav>

      <div className="content">
        {currentPage === 'home' && (
          <div className="home">
            <h1>Student Management System</h1>
            <p>Welcome to the student management portal</p>
          </div>
        )}

        {currentPage === 'add' && (
          <AddStudent onSuccess={() => setCurrentPage('view')} />
        )}

        {currentPage === 'view' && (
          <ViewStudents 
            onEdit={(student) => {
              setSelectedStudent(student);
              setCurrentPage('edit');
            }}
          />
        )}

        {currentPage === 'edit' && selectedStudent && (
          <EditStudent 
            student={selectedStudent}
            onSuccess={() => setCurrentPage('view')}
          />
        )}
      </div>
    </div>
  );
}

export default App;
